// En Next.js no usamos Axios por defecto — fetch nativo es suficiente
// El fetch nativo de Next.js tiene superpoderes: cache, revalidación
import type { Mesa, Plato, Pedido, EstadoPedido } from '../types';
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_URL no está definida en .env.local");
}
// Funciones de fetching — se llaman desde Server Components
// cache: "no-store" = siempre pide datos frescos al backend
// cache: "force-cache" = cachea la respuesta (default Next.js)
export async function getMesas(): Promise<Mesa[]> {
    const res = await fetch(`${BASE_URL}/mesas`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Error al obtener mesas: ${res.status}`);
    return res.json();
}
export async function getPlatos(): Promise<Plato[]> {
    const res = await fetch(`${BASE_URL}/platos`, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Error al obtener platos: ${res.status}`);
    return res.json();
}
export async function crearPedido(
    datos: Omit<Pedido, '_id' | 'createdAt' | 'updatedAt'>
): Promise<Pedido> {
    const res = await fetch(`${BASE_URL}/pedidos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos),
        cache: 'no-store',
    });
    if (!res.ok) throw new Error(`Error al crear pedido: ${res.status}`);
    return res.json();
}
export async function cambiarEstadoPedido(
    pedidoId: string,
    estado: EstadoPedido
): Promise<Pedido> {
    const res = await fetch(`${BASE_URL}/pedidos/${pedidoId}/estado`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estado }),
        cache: 'no-store',
    });
    if (!res.ok) throw new Error(`Error al cambiar estado: ${res.status}`);
    return res.json();
}
export async function getMesaById(id: string): Promise<Mesa> {
    // 1. Hacemos la petición a la URL dinámica (incluye el ID)
    const res = await fetch(`${BASE_URL}/mesas/${id}`, { cache: 'no-store' });
    // 2. Control de errores específico (404)
    if (res.status === 404) {
        throw new Error(`Mesa con ID ${id} no encontrada`);
    }
    // 3. Control de errores genérico (500, etc.)
    if (!res.ok) throw new Error(`Error al obtener mesa: ${res.status}`);
    // 4. Devolvemos el JSON (un objeto Mesa único)
    return res.json();
}
