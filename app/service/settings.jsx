import db from "../db.server";

export async function merchantSettingSave(signUpData){
    return await db.Settings.create({
        data: signUpData,
      });
}

export async function merchantSettingUpdate(id, signUpData){
    return await db.Settings.update({
        where: {
          id: id,
        },
        data: signUpData
      });
  
}

export async function getMerchantSettings(shopId, settings_type){

    try{
        const settings = await db.Settings.findFirst({
            where: {
                shopId: shopId,
                type: settings_type
            },
            select: {
                id: true,
                configs: true,
            }
        });

        return settings;
    }catch(error){
        console.error('Generic error:', error.message);
        throw new Error('An error occurred: ' + error.message);
    }

}

export async function getMerchantSettingsBySettingType(settings_type){

    try{
        const settings = await db.Settings.findMany({
            where: {
                type: settings_type
            },
            select: {
                configs: true,
            }
        });

        return settings;
    }catch(error){
        console.error('Generic error:', error.message);
        throw new Error('An error occurred: ' + error.message);
    }

}