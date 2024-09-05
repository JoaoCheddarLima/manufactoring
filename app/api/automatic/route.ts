import { NextResponse } from 'next/server';

import connectToDb from '@/app/lib/db';
import { OrderDto } from '@/app/types';

import { Orders } from '../../models/orders';

//Precisava da middlaware pra evitar esses connects to db e uma possivel abstração de try catch

export async function GET(req: Request) {
    await connectToDb();
    //podia perder tempo no error handling mas acho que o ideal é usar rede local pra esse tipo de atividade porque ai só depende de energia.
    try {
        const orders = await Orders.find();

        return NextResponse.json(orders);
    } catch (err) {
        return NextResponse.error();
    }
}

export async function POST(req: Request) {
    await connectToDb();

    const body: OrderDto = await req.json();

    try {
        const {
            id,
            description,
            amount,
            status,
        } = body;


        const now = Date.now();

        await Orders.create({
            id,
            description,
            amount,
            status,
            amountDone: 0,
            requestedAt: now,
            updatedAt: now
        })

        return NextResponse.json({
            message: 'Order created'
        });
    } catch (err) {
        return NextResponse.error();
    }
}