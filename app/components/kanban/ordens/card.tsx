import {
  useEffect,
  useState,
} from 'react';

import toast from 'react-hot-toast';
import { IoClose } from 'react-icons/io5';

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
        filled,
        handleClose = () => { }
    }:
        {
            filled?: OrderDto,
            handleClose?: () => void
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

        if (description == filled?.description && amount == filled?.amount && status == filled?.status && orderId == filled?.id) {
            toast.error('Nenhuma alteração foi feita!');
            handleClose();
            return;
        }

        if (filled) {
            handleClose();

            toast.promise(
                API.updateOrder({
                    description,
                    amount,
                    id: orderId,
                    status
                }),
                {
                    loading: 'Atualizando ordem...',
                    success: 'Ordem atualizada com sucesso!',
                    error: 'Erro ao atualizar ordem!'
                }
            )
        } else {
            handleClose();

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
        <div>
            <h1 className='w-full flex justify-between'>
                {
                    filled ? 'Editando ordem' : 'Nova ordem'
                }
                <button
                    onClick={() => {
                        handleClose();
                    }}
                >
                    <IoClose
                        className='text-red-500 text-2xl cursor-pointer'
                    />
                </button>
            </h1>
            <form
                className='flex flex-col gap-3'
                onSubmit={handleSubmit}
            >
                {
                    !filled && (
                        <TextField
                            value={orderId}
                            label='ID'
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
                    label='Descrição'
                    helperText='ex: Parafuso 3mm'
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    required
                />
                <TextField
                    value={amount}
                    type='number'
                    label='Quantidade'
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
                            label="Status"
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
        </div>
    );
}