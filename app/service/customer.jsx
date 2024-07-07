import { json } from "@remix-run/node";
import db from "../db.server";

export async function createCustomer(payload, points) {
    try {
        const res = await db.CustomerPoint.create({
            data: {
                customerId: payload.id,
                customerFirstName: payload.first_name,
                customerLastName: payload.last_name,
                email: payload.email,
                points: points,
                shop: payload.shopName,
            }
        });

        return res;
    } catch (error) {
        console.error('Generic error:', error.message);
        throw new Error('An error occurred: ' + error.message);
    }
}

export async function updateCustomer(id, data) {
    try {
        const res = await db.CustomerPoint.update({
            where: {
                id: id
            },
            data: data
        });

        return res;
    } catch (error) {
        console.error('Generic error:', error.message);
        throw new Error('An error occurred: ' + error.message);
    }
}

export async function findCustomerByIdWithShop(customerId, shop) {
    const customer = await db.CustomerPoint.findFirst({
        where: {
            customerId: customerId,
            shop: shop
        },
        select: {
            id: true,
            customerFirstName: true,
            customerLastName: true,
            email: true,
            points: true,
            birthday: true,
        }
    });

    return customer;
}

export async function findCustomerByEmail(email) {
    const customer = await db.CustomerPoint.findFirst({
        where: {
            email: email
        },
        select: {
            id: true,
            customerFirstName: true,
            customerLastName: true,
            email: true,
            points: true,
        }
    });

    return customer;
}

export async function updateCustomerPointsById(points, customerId) {
    const pointsUpdate = await db.CustomerPoint.update({
        where: {
            id: customerId
        },
        data: {
            points: points
        }
    });

    return pointsUpdate;
}

export async function getCustomersForBirthdayToday(shop) {
    const todayDate = new Date().toJSON().slice(0, 10); //Since we want only the current date, we can use the slice() method to format "2024-07-01T11:06:50.369Z"

    const customerIds = await db.CustomerPoint.findMany({
        where: {
            birthday: todayDate,
            shop: shop,
        },
        select: {
            id: true,
            points: true,
        }
    });

    return customerIds;
};