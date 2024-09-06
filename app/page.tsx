'use client';

import {
  useEffect,
  useState,
} from 'react';

import { Toaster } from 'react-hot-toast';

import Kanban from '@/app/components/kanban/page';
import {
  OrderDto,
  Sector,
} from '@/app/types';

import Charts from './components/charts/page';
import { API } from './lib/api';

export default function Automaticas() {
    const [loading, setLoading] = useState<boolean>(true);
    const [allOrders, setAllOrders] = useState<OrderDto[]>([]);

    useEffect(() => {
        // Poderia fazer um context mas não é necessário já que é uma página só e nem usuário real tem então não tem problema em deixar o fetch assim mesmo
        if (loading) {
            setAllOrders([]);

            API.getOrders(Sector.Automatic)
                .then(orders => {
                    setAllOrders(orders);
                    setLoading(false);
                })
        }

        () => {
            setLoading(false);
        }
    }, [loading]);

    const handleLowerLevel = () => {
        setLoading(true);
    }

    return (
        <div className="h-full flex flex-col gap-10">
            <Toaster />
            <Charts
                orders={allOrders}
            />
            <div className='flex flex-col'>
                <h1 className='text-lg pl-5'>
                    Controle de ordens
                </h1>
                <Kanban
                    setLoading={handleLowerLevel}
                    orders={allOrders}
                />
            </div>
        </div>
    );
}
