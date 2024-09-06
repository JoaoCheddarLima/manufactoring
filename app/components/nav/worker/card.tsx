import { BsPersonCircle } from 'react-icons/bs';

import { GestorMock } from '@/app/mocks/worker';

export function WorkerCard() {
    return (
        <div className="w-fit flex items-center gap-2">
            <BsPersonCircle />
            {GestorMock.name} ({GestorMock.role} {GestorMock.turno})
        </div>
    );
}