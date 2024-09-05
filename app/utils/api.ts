import { MockManual } from '../mocks/manual';
import {
  OrderDto,
  Sector,
} from '../types';

//A classe API existe para facilitar as requisições no front como se possuissemos um SDK para o back.
//Nota para doc: A função API.getOrdersMock() é uma função que simula a requisição de dados de um servidor, retornando um array de objetos OrderDto.
//Nota para doc: A função API.getOrders() é uma função que simula a requisição de dados de um servidor, retornando um array de objetos OrderDto.
export class API {
    private static readonly BASE_URL = '/api';

    private static async get<T>(path: string): Promise<T> {
        const response = await fetch(`${API.BASE_URL}${path}`);
        return response.json();
    }

    private static async post<T>(path: string, body: any): Promise<T> {
        const response = await fetch(`${API.BASE_URL}${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        return response.json();
    }

    public static async getOrders(setor: Sector): Promise<OrderDto[]> {
        return API.get('/' + setor);
    }

    public static async getOrdersMock(setor: Sector): Promise<OrderDto[]> {
        return MockManual;
    }
}