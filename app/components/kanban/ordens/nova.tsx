import {
  useEffect,
  useState,
} from 'react';

import toast from 'react-hot-toast';

import { API } from '@/app/lib/api';
import {
  OrderDto,
  Status,
} from '@/app/types';
import {
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

export function OrdemCard(
    {
        filled
    }:
        {
            filled?: OrderDto
        }
) {
    const [description, setDescription] = useState<string>();
    const [amount, setAmount] = useState<number>();
    const [status, setStatus] = useState<Status>(Status.Waiting);
    const [orderId, setID] = useState<number>();

    useEffect(() => {
        if (filled) {
            setDescription(filled.description);
            setAmount(filled.amount);
            setStatus(filled.status);
            setID(filled.id);
        }
    }, [filled])

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (filled) {

        } else {
            toast.promise(
                API.createOrder({
                    description,
                    amount,
                    id: orderId
                }),
                {
                    loading: 'Criando ordem...',
                    success: 'Ordem criada com sucesso!',
                    error: 'Erro ao criar ordem!'
                }
            )
        }
    }

    return (
        <form
            className='flex flex-col gap-3'
            onSubmit={handleSubmit}
        >
            <h1 className='w-full text-center'>
                {
                    filled ? 'Editando ordem' : 'Nova ordem'
                }
            </h1>
            {
                !filled && (
                    <TextField
                        value={orderId}
                        placeholder='ID Produto'
                        type='number'
                        onChange={(e) => {
                            setID(Number(e.target.value));
                        }}
                        required
                    />
                )
            }
            <TextField
                value={description}
                placeholder='Descrição do produto'
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
                required
            />
            <TextField
                value={amount}
                type='number'
                placeholder='Quantidade'
                onChange={(e) => {
                    setAmount(Number(e.target.value));
                }}
                required
            />
            {
                filled && (
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status || Status.Waiting}
                        label="Age"
                        onChange={(e) => {
                            setStatus(e.target.value as Status);
                        }}
                    >
                        <MenuItem
                            value={Status.Waiting}
                        >
                            Em espera
                        </MenuItem>
                        <MenuItem
                            value={Status.Running}
                        >
                            Em produção
                        </MenuItem>
                        <MenuItem
                            value={Status.Finished}
                        >
                            Concluída
                        </MenuItem>
                    </Select>
                )
            }
            <button
                type='submit'
                className='p-2 border rounded-md bg-blue-300'
            >
                Finalizar
            </button>
        </form>
    );
}