import {
  NextRequest,
  NextResponse,
} from 'next/server';

import { Orders } from '../../models/orders';

export async function GET(req: NextRequest) {
    //podia perder tempo no error handling mas acho que o ideal é usar rede local pra esse tipo de atividade porque ai só depende de energia.
    try {
        const orders = await Orders.find();

        return NextResponse.json(orders);
    } catch (err) {
        return NextResponse.error();
    }
}