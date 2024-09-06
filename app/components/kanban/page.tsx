'use client';

import {
  useEffect,
  useState,
} from 'react';

import {
  OrderDto,
  Status,
} from '@/app/types';

import BaseModal from '../modal/base';
import {
  KanbanCard,
  KanbanGrid,
  KanbanHeader,
  KanbanList,
  KanbanListItem,
} from './card/cards';
import { OrdemCard } from './ordens/card';

export default function Kanban(
    {
        orders,
        setLoading
    }: {
        orders?: OrderDto[]
        setLoading?: (loading: boolean) => void
    }
) {

    const [waiting, setWaiting] = useState<OrderDto[]>([]);
    const [running, setRunning] = useState<OrderDto[]>([]);
    const [done, setDone] = useState<OrderDto[]>([]);
    const [selectedOrder, setSelectedOrder] = useState<OrderDto>();

    const [waitingModalOpen, setWaitingModalOpen] = useState<boolean>(false);

    useEffect(() => {
        setWaiting([]);
        setRunning([]);
        setDone([]);
        for (const order of orders) {
            if (order.status == Status.Waiting) {
                setWaiting(current => {
                    return [...current, order];
                })
            }
            if (order.status == Status.Running) {
                setRunning(current => {
                    return [...current, order];
                })
            }
            if (order.status == Status.Finished) {
                setDone(current => {
                    return [...current, order];
                })
            }
        }
    }, [orders])

    function handleClose() {
        setWaitingModalOpen(false);
        setSelectedOrder(undefined);
        setLoading(true);
    }

    return (
        <KanbanGrid>
            <KanbanCard>
                <KanbanHeader
                    onclick={() => setWaitingModalOpen(true)}
                    allowInsert={true}
                >
                    Ordens em espera ({waiting.length})
                </KanbanHeader>
                <BaseModal
                    open={waitingModalOpen}
                    handleClose={handleClose}
                    handleOpen={() => setWaitingModalOpen(true)}
                >
                    <OrdemCard
                        handleClose={handleClose}
                        filled={selectedOrder}
                    />
                </BaseModal>
                <KanbanList>
                    {
                        waiting.map(order => (
                            <div
                                key={order.id + 'base'}
                                onClick={() => {
                                    setSelectedOrder(order);
                                    setWaitingModalOpen(true);
                                }}
                                className='cursor-pointer'
                            >
                                <KanbanListItem
                                    key={order.id}
                                >
                                    ({order.amount}) {order.description}
                                </KanbanListItem>
                            </div>
                        ))
                    }
                </KanbanList>
            </KanbanCard>
            <KanbanCard>
                <KanbanHeader>
                    Ordens em execução ({running.length})
                </KanbanHeader>
                <KanbanList>
                    {
                        running.map(order => (
                            <div
                                key={order.id + 'base'}
                                onClick={() => {
                                    setSelectedOrder(order);
                                    setWaitingModalOpen(true);
                                }}
                                className='cursor-pointer'
                            >
                                <KanbanListItem
                                    key={order.id}
                                >
                                    ({order.amount}) {order.description}
                                </KanbanListItem>
                            </div>
                        ))
                    }
                </KanbanList>
            </KanbanCard>
            <KanbanCard>
                <KanbanHeader>
                    Ordens finalizadas ({done.length})
                </KanbanHeader>
                <KanbanList>
                    {
                        done.map(order => (
                            <div
                                key={order.id + 'base'}
                                onClick={() => {
                                    setSelectedOrder(order);
                                    setWaitingModalOpen(true);
                                }}
                                className='cursor-pointer'
                            >
                                <KanbanListItem
                                    key={order.id}
                                >
                                    ({order.amount}) {order.description}
                                </KanbanListItem>
                            </div>
                        ))
                    }
                </KanbanList>
            </KanbanCard>
        </KanbanGrid>
    );
}
