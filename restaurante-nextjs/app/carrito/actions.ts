// app/carrito/actions.ts
// 'use server' al inicio — todas las funciones exportadas son Server Actions
'use server';

import type { EstadoPedidoContext, Pedido } from '../../src/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;//direccion del backend

// Server Action — corre en el servidor, llama al backend NestJS
// El Client Component la llama como una función normal
export async function enviarComanda(pedido: EstadoPedidoContext): Promise<{ ok: true; pedidoId: string } | { ok: false; error: string }> {
    // si no hay URL en .env.local, devolvemos error
    if (!BASE_URL) {
        return { ok: false, error: 'NEXT_PUBLIC_API_URL no configurada' };
    }
    //intentamos hacer post con lo que tiene pedido
    try {
        const res = await fetch(`${BASE_URL}/pedidos`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                mesaId: pedido.mesaId,
                tipo: pedido.tipo,
                estado: 'pendiente',
                items: pedido.items,
                total: pedido.total,
            }),
            cache: 'no-store',
        });
        // error si el backend no puede procesar el pedido
        if (!res.ok) {
            const texto = await res.text();
            return { ok: false, error: `Error ${res.status}: ${texto}` };
        }
        // le da el json que devuelve nestjs a nuevoPedido
        const nuevoPedido: Pedido = await res.json();
        console.log('Nuevo pedido:', nuevoPedido);
        return { ok: true, pedidoId: nuevoPedido._id };// retorna el ok en true y pedidoId con el _id del pedido creado en el BACKEND

    } catch (err: unknown) {
        const mensaje = err instanceof Error ? err.message : "Error desconocido";
        return { ok: false, error: mensaje }; // Si falla la funcion por alguna razon devuelve error desconocido  
    }
}
