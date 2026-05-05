import { Injectable } from '@nestjs/common';
import { Pedido } from '../types';

@Injectable()
export class PedidosService {
  private pedidos: Pedido[] = [
    {
      _id: 'p1',
      mesaId: '2',
      tipo: 'mesa',
      estado: 'en_preparacion',
      items: [
        { platoId: 'p1', nombre: 'Hamburguesa Especial', cantidad: 2, precioUnitario: 12.5 },
      ],
      total: 25.0,
      createdAt: new Date().toISOString(),
    },
  ];

  findAll(): Pedido[] {
    return this.pedidos;
  }

  create(pedido: Pedido): Pedido {
    this.pedidos.push(pedido);
    return pedido;
  }
}
