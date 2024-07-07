import db from '../db.server';

export async function getAccessTokenForShop(shop) {
    console.log("SHO{LDLD --> ", shop);
    const shopRecord = await db.Session.findFirst({ where: { shop } });
    if (shopRecord) {
      return shopRecord.accessToken;
    }
    throw new Error('Access token not found for shop');
};

export async function getShopIdByShopName(shop) {
    const shopRecord = await db.Session.findFirst({ where: { shop } });
    if (shopRecord) {
      return shopRecord.id;
    }
    throw new Error('Shop id not found for shop');
};
