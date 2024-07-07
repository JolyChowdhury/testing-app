import { URL } from 'url';
import { json } from "@remix-run/node";
// import db from "../../db.server";
import { findCustomerByIdWithShop, updateCustomerPointsById, updateCustomer } from "../../service/customer";
import { createPirceRule, createDiscountCode } from "../../service/discount";
// import { getAccessTokenForShop, getShopIdByShopName } from "../../service/shop";
import { getTodayDataTimeString, getRandomStrign } from "../../helper";
import { getMerchantSettings } from "../../service/settings";
import { settingsType } from "../../enum/settings_type";

export async function loader({ request }) {

    const { getAccessTokenForShop, getShopIdByShopName } = await import('../../service/shop');

    const url = new URL(request.url);
    const event = url.searchParams.get("event");
    const shop = url.searchParams.get("shop");

    let data = null;

    if (event == 'findCustomer') {
        const customerId = url.searchParams.get("logged_in_customer_id");

        const customerData = await findCustomerByIdWithShop(customerId, shop);
        const getRedeemSettings = await getMerchantSettings(shop, settingsType.REDDEM_RULES);
        const getFbPageSettings = await getMerchantSettings(shop, settingsType.FACEBOOK_LIKE);

        data = json({
            customerData: customerData,
            redeemSettings: getRedeemSettings,
            fbPageSettings: getFbPageSettings,
        });
        
    } else if (event == 'createDiscount') {
        const customerId = url.searchParams.get("logged_in_customer_id");
        const redeemPoint = url.searchParams.get("points");

        const customerData = await findCustomerByIdWithShop(customerId, shop);

        const accessToken = await getAccessTokenForShop(shop);
        const getRedeemSettings = await getMerchantSettings(shop, settingsType.REDDEM_RULES);
        const merchantSetPoint = parseInt(getRedeemSettings?.configs?.points);
        const merchantSetAmount = parseInt(getRedeemSettings?.configs?.amount);
        console.log("Access Token: ", accessToken);
        console.log("DiDSOCOUNT: ", getRedeemSettings);
        console.log("POINNTT: ", merchantSetPoint);
        console.log("AMOUNTTF: ", merchantSetAmount);

        if (redeemPoint <= customerData.points) {
            console.log("HERE IN", customerData);
            const discountAmount = (merchantSetAmount * redeemPoint) / merchantSetPoint;
            const discount_title = getRandomStrign(8);

            const priceRuleBody = {
                "price_rule": {
                    "title": discount_title,
                    "target_type": "line_item",
                    "target_selection": "all",
                    "allocation_method": "across",
                    "value_type": "fixed_amount",
                    "value": "-" + discountAmount,
                    "customer_selection": "all",
                    "starts_at": getTodayDataTimeString()
                }
            };

            const created_price_rules = await createPirceRule(shop, accessToken, priceRuleBody);

            if (created_price_rules) {
                const discountBody = {
                    "discount_code":
                    {
                        "code": discount_title
                    }
                };

                const discountCodeCreate = createDiscountCode(shop, accessToken, created_price_rules.price_rule.id, discountBody);

                if (discountCodeCreate) {
                    const customerRemainPoints = customerData.points - redeemPoint;
                    const customerPointUpdate = await updateCustomerPointsById(customerRemainPoints, customerData.id);

                    data = json({
                        data: {
                            discountCode: discount_title,
                            remainPoints: customerRemainPoints
                        }
                    })
                }
            }

        } else {
            data = json({
                data: {
                    discountCode: false
                }
            })
        }

    } else if(event == 'socialMediaReward'){
        const customerId = url.searchParams.get("logged_in_customer_id");
        
        try{
            const customerData = await findCustomerByIdWithShop(customerId, shop);
            // const shopid = await getShopIdByShopName(shop);
            const getRedeemSettings = await getMerchantSettings(shop, settingsType.FACEBOOK_LIKE);
    
            let customerPointUpdate = false;

            if(getRedeemSettings){
                const customerNewPoint = customerData.points + parseInt(getRedeemSettings.configs?.reward_points);
                customerPointUpdate = await updateCustomerPointsById(customerNewPoint, customerData.id);
            }

            data = json({
                customerPoint: customerPointUpdate.points
            });
        }catch(err){
            console.log("social media rewards route error: ", err.message);
        }
    } else if(event == 'updateBirthdayDate'){
        const customerId = url.searchParams.get("logged_in_customer_id");
        const birthdayDate = url.searchParams.get("birthdayDate");
        
        try{
            let customerData = await findCustomerByIdWithShop(customerId, shop);
            customerData.birthday = birthdayDate;

            const updatedCustomer = await updateCustomer(customerData.id, customerData);
            console.log("UN+ ", updatedCustomer);
            data = json({
                customerBirthday: updatedCustomer.birthday
            });
        }catch(err){
            console.log("Birthday rewards route error: ", err.message);
        }
    }

    return data;
};

// async function getCustomerDetailByEmail(email) {
//     const customer = await db.CustomerPoint.findMany({
//         where: {
//             email: email
//         },
//         select: {
//             id: true,
//             customerFirstName: true,
//             customerLastName: true,
//             email: true,
//             points: true,
//         }
//     });

//     console.log("CUSTOMER --->>>", customer);

//     return json(customer);
// }

