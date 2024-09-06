'use client';

import { useState } from 'react';

import Link from 'next/link';

import { WorkerCard } from './worker/card';

export default function MainTopNav() {
    const [waitingModalOpen, setWaitingModalOpen] = useState<boolean>(false);

    return (
        <div className='flex flex-col justify-center items-center gap-5 md:gap-0 md:flex-row md:justify-between p-5 border-b-2 font-thin bg-blue-500 text-white '>
            <div className='md:hidden flex gap-3'>
                <Link
                    className='flex items-center'
                    href='/'
                >
                    <h1 className='text-lg'>
                        Manufatura
                    </h1>
                </Link>
                <WorkerCard />
            </div>
            <Link
                className='items-center hidden md:block'
                href='/'
            >
                <h1 className='text-lg'>
                    Manufatura
                </h1>
            </Link>
            <div className='hidden md:block'>
                <WorkerCard />
            </div>
        </div>
    );
}
