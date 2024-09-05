import { NextResponse } from 'next/server';

import { OrderDto } from '@/app/types';

import { Orders } from '../../models/orders';

export async function GET(req: Request) {
    //podia perder tempo no error handling mas acho que o ideal é usar rede local pra esse tipo de atividade porque ai só depende de energia.
    try {
        const orders = await Orders.find();

        return NextResponse.json(orders);
    } catch (err) {
        return NextResponse.error();
    }
}

export async function POST(req: Request) {
    const { body } = await req.json();

    try {
        const {
            id,
            description,
            amount,
            status,
        }: OrderDto = body;

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