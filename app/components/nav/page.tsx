'use client';

import { useState } from 'react';

import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';

import { OrdemCard } from '../kanban/ordens/nova';
import BaseModal from '../modal/base';
import { WorkerCard } from './worker/page';

export default function MainTopNav() {
    const [waitingModalOpen, setWaitingModalOpen] = useState<boolean>(false);

    return (
        <div className='flex justify-between p-5 border-b-2 font-thin bg-blue-500 text-white '>
            <Link
                className='flex items-center'
                href='/'
            >
                <h1 className='text-lg'>
                    Manufatura
                </h1>
            </Link>
            <div
                className='flex items-center justify-center align-middle cursor-pointer gap-2 border p-2 rounded-md'
                onClick={
                    () => {
                        setWaitingModalOpen(true);
                    }
                }
            >
                <FiPlus className='text-lg' />
                Nova ordem
                <BaseModal
                    open={waitingModalOpen}
                    handleClose={() => setWaitingModalOpen(false)}
                    handleOpen={() => setWaitingModalOpen(true)}
                >
                    <OrdemCard />
                </BaseModal>
            </div>
            <WorkerCard />
        </div>
    );
}
