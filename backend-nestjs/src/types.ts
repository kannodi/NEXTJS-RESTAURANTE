// src/types.ts
export type EstadoMesa = 'disponible' | 'ocupada' | 'reservada' | 'fuera_servicio';
export type TipoPedido = 'mesa' | 'para_llevar';
export type EstadoPedido = 'pendiente' | 'en_preparacion' | 'lista' | 'entregada' | 'cancelada';

export class Mesa {
    _id: string;
    numero: number;
    estado: EstadoMesa;
    capacidad?: number;
    comensales?: number;
    pedidoActivoId?: string | null;
}

export class Plato {
    _id: string;
    nombre: string;
    precio: number;
    stock: number;
    categoria: string;
}

export class PedidoItem {
    platoId: string;
    nombre: string;
    cantidad: number;
    precioUnitario: number;
}

export class Pedido {
    _id: string;
    mesaId: string | null;
    tipo: TipoPedido;
    estado: EstadoPedido;
    items: PedidoItem[];
    total: number;
    createdAt: string;
}
