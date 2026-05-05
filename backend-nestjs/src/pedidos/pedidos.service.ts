import { Injectable } from '@nestjs/common';
import { Pedido, EstadoPedido } from '../types';

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

  updateEstado(id: string, estado: EstadoPedido): Pedido | null {
    const index = this.pedidos.findIndex((p) => p._id === id);
    if (index !== -1) {
      this.pedidos[index].estado = estado;
      return this.pedidos[index];
    }
    return null;
  }
}
