import React from 'react';

import { FiPlus } from 'react-icons/fi';

export function KanbanCard({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className='h-full w-full md:w-[32%] flex flex-col items-center text-start border bg-[#F3F2F1] p-3 gap-3'>
            {children}
        </div>
    );
}

export function KanbanHeader({
    children,
    onclick,
    allowInsert
}: {
    children: React.ReactNode,
    onclick?: () => void,
    allowInsert?: boolean
}) {
    return (
        <h1 className='flex text-lg w-full justify-between'>
            {children}
            {
                allowInsert && (
                    <button
                        onClick={onclick}
                        className='cursor-pointer'
                    >
                        <FiPlus className='text-lg' />
                    </button>
                )
            }
        </h1>
    );
}

export function KanbanList({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className='flex flex-col gap-2 w-full'>
            {children}
        </div>
    );
}

export function KanbanGrid({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className='w-full h-max flex flex-col md:flex-row md:justify-between flex-wrap p-5 gap-5 md:gap-0 font-thin rounded-md'>
            {children}
        </div>
    );
}

export function KanbanListItem({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className='flex w-full items-center bg-white rounded-md p-3'>
            {children}
        </div>
    );
}