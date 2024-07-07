import { authenticate } from "../shopify.server";
import db from "../db.server";
import { createCustomer, findCustomerByIdWithShop, updateCustomerPointsById } from "../service/customer";
import { getMerchantSettings } from "../service/settings";
import { settingsType } from "../enum/settings_type";
import { purchaseRewards } from "../service/order";

export const action = async ({ request }) => {
  const { topic, shop, session, admin, payload } = await authenticate.webhook(request);
  const { id } = session;

  if (!admin) {
    // The admin context isn't returned if the webhook fired after a shop was uninstalled.
    throw new Response();
  }

  switch (topic) {
    case "APP_UNINSTALLED":
      if (session) {
        await db.session.deleteMany({ where: { shop } });
      }

      break;
    case "CUSTOMERS_CREATE":
      const signUpSettings = await getMerchantSettings(shop, settingsType.SIGN_UP);
      
      payload.shopName = shop; // Adding new attribut with payload to save the shop with customer 
      const customer = await createCustomer(payload, parseInt(signUpSettings?.configs?.points ? signUpSettings?.configs?.points : "0"));
      
      return new Response("Success!", { status: 200 });
      break;
    case "ORDERS_CREATE":
      console.log("ORDER PAYLOAD: ", payload);
      try{
        const purchaseSettings = await getMerchantSettings(shop, settingsType.PURCHASE_RULES);

        let purchaseReward = null;

        if(purchaseSettings?.configs){
          purchaseReward = await purchaseRewards(payload.customer.id, payload.total_price, purchaseSettings?.configs);
        }
  
        if(purchaseReward){
          const customer = await findCustomerByIdWithShop(payload.customer.id, shop);
          const newPoints = purchaseReward + customer.points;
          const update = await updateCustomerPointsById(newPoints, customer.id);
          console.log("UPDDDDDDDDDDD ", update);
        }
      }catch(err){
        console.log("order create webhook error: ", err);
      }
      
      return new Response("Success!", { status: 200 });
      break;
    case "CUSTOMERS_DATA_REQUEST":
    case "CUSTOMERS_REDACT":
    case "SHOP_REDACT":
    default:
      throw new Response("Unhandled webhook topic", { status: 404 });
  }

  throw new Response();
};
