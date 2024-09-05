import {
  OrderDto,
  Sector,
  Status,
} from '../types';

const qntMesasEncomedadas = 2500;

export const MockManual: OrderDto[] = [
    {
        amount: qntMesasEncomedadas,
        amountDone: 1129,
        history: [
            {
                amount: 1129,
                emitedBy: "João",
                quality: 92,
                rework: false,
                timestamp: Date.now() - 1000 * 60 * 60 * 24
            }
        ],
        id: 1,
        issues: [],
        description: "Base da mesa 35",
        requestedAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
        sector: Sector.Automatic,
        status: Status.Running,
        updatedAt: Date.now() - 1000 * 60 * 60 * 24,
    },
    {
        amount: qntMesasEncomedadas * 4,
        amountDone: 1129,
        history: [
            {
                amount: 4 * 1129,
                emitedBy: "João",
                quality: 99,
                rework: false,
                timestamp: Date.now() - 1000 * 60 * 60 * 24
            }
        ],
        id: 2,
        issues: [],
        description: "Pés para mesas da 35",
        requestedAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
        sector: Sector.Automatic,
        status: Status.Running,
        updatedAt: Date.now() - 1000 * 60 * 60 * 24,
    },
    {
        amount: qntMesasEncomedadas * 4,
        amountDone: 1129,
        history: [
            {
                amount: 4 * 250,
                emitedBy: "João",
                quality: 92,
                rework: false,
                timestamp: Date.now() - 1000 * 60 * 60 * 24
            }
        ],
        id: 3,
        issues: [],
        description: "Kina da mesa 35 v1",
        requestedAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
        sector: Sector.Automatic,
        status: Status.Running,
        updatedAt: Date.now() - 1000 * 60 * 60 * 24,
    },
    {
        amount: qntMesasEncomedadas * 2,
        amountDone: 1129,
        history: [
            {
                amount: 2 * 350,
                emitedBy: "João",
                quality: 99,
                rework: false,
                timestamp: Date.now() - 1000 * 60 * 60 * 24
            }
        ],
        id: 4,
        issues: [
            {
                status: Status.Waiting,
                createdAt: Date.now() - 1000 * 60 * 60 * 24,
                description: "Absenteísmo de operador sem justificativa"
            }
        ],
        description: "Apoiador inferior de items perifericos da mesa 35",
        requestedAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
        sector: Sector.Automatic,
        status: Status.Waiting,
        updatedAt: Date.now() - 1000 * 60 * 60 * 24,
    },
]
