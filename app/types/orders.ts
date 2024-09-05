export enum Status {
    Running = 'running',
    Waiting = 'waiting',
    Finished = 'finished'
}

export interface Issue {
    description: string
    status: Status
    createdAt: number
}

export enum Sector {
    Automatic = 'automatic',
    Manual = 'manual'
}

export interface History {
    amount: number
    timestamp: number
    emitedBy: string
    rework: boolean
    quality: number
}

export interface OrderDto {
    id: number
    description: string
    status: Status
    sector: string
    amount: number
    amountDone: number
    requestedAt: number
    updatedAt: number
    issues: Issue[] | []
    history: History[] | []
}