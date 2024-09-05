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
} from './card/page';
import { OrdemCard } from './ordens/nova';

export default function Kanban(
    {
        orders
    }: {
        orders: OrderDto[]
    }
) {

    const [waiting, setWaiting] = useState<OrderDto[]>([]);
    const [running, setRunning] = useState<OrderDto[]>([]);
    const [done, setDone] = useState<OrderDto[]>([]);

    const [waitingModalOpen, setWaitingModalOpen] = useState<boolean>(false);

    useEffect(() => {
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
                    handleClose={() => setWaitingModalOpen(false)}
                    handleOpen={() => setWaitingModalOpen(true)}
                >
                    <OrdemCard />
                </BaseModal>
                <KanbanList>
                    {
                        waiting.map(order => (
                            <KanbanListItem
                                key={order.id}
                            >
                                {order.description}
                            </KanbanListItem>
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
                            <KanbanListItem key={order.id}>
                                {order.description}
                            </KanbanListItem>
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
                            <KanbanListItem key={order.id}>
                                {order.description}
                            </KanbanListItem>
                        ))
                    }
                </KanbanList>
            </KanbanCard>
        </KanbanGrid>
    );
}
