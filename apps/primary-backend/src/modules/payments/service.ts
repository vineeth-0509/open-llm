import { prisma } from "db";

const ONRAMP_AMOUNT = 1000;

export abstract class PaymentsService{
    static async onwrap(userId: number){
        const user = await prisma.$transaction([
            prisma.user.update({
                where:{
                    id: userId
                },
                data:{
                    credits:{
                        increment: ONRAMP_AMOUNT
                    }
                }
            }),
            prisma.onrampTransaction.create({
                data:{
                    userId,
                    amount: ONRAMP_AMOUNT,
                    status:"completed"
                }
            })
        ])
        return user[0].credits;
    }
}