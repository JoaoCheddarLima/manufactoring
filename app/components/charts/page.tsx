import * as React from 'react';

import {
  OrderDto,
  Status,
} from '@/app/types';
import {
  Gauge,
  gaugeClasses,
} from '@mui/x-charts/Gauge';
import { PieChart } from '@mui/x-charts/PieChart';

export default function Charts(
    {
        orders
    }:{
        orders: OrderDto[]
    }
) {
    return (
        <div className='flex flex-col gap-5 justify-center w-full items-center p-5'>
            <div className='flex flex-col gap-5 md:flex-row'>
                <div className='flex flex-col'>
                    <h1 className='text-center text-lg'>
                        O.E.E T1
                    </h1>
                    <Gauge
                        value={87.5}
                        startAngle={-110}
                        endAngle={110}

                        sx={{
                            [`& .${gaugeClasses.valueText}`]: {
                                fontSize: 40,
                                transform: 'translate(0px, 0px)',
                            },
                        }}
                        text={
                            ({ value, valueMax }) => `${value} / ${valueMax}`
                        }
                        width={300}
                        height={200}
                    />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-center text-lg'>
                        Ordens por status
                    </h1> 
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: orders.filter(e => e.status == Status.Waiting).length, label: 'Em espera' },
                                    { id: 1, value: orders.filter(e => e.status == Status.Running).length, label: 'Em produção' },
                                    { id: 2, value: orders.filter(e => e.status == Status.Finished).length, label: 'Finalizadas' },
                                ],
                            },
                        ]}
                        width={400}
                        height={200}
                    />
                </div>
            </div>
        </div>
    );
}