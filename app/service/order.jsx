
export async function purchaseRewards(customerId, orderAmount, orderSettings){

    console.log("purchase argument1: ", customerId);
    console.log("purchase argument2: ", orderAmount);
    console.log("purchase argument3: ", orderSettings);
    const perDollarPoints = orderSettings?.purchase_points;

    let totalPointReward = 0;

    if(perDollarPoints){
        totalPointReward = parseInt((orderAmount * perDollarPoints)); 
    }

    console.log("ORDER REW ", totalPointReward);
    return totalPointReward;
}