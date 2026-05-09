// app/menu/PlatoCard.tsx
'use client';

import { useState } from 'react';
import type { Plato } from '../../src/types';
import { usePedido } from '../../src/context/PedidoProvider';

interface PlatoCardProps {
    plato: Plato;
}

export default function PlatoCard({ plato }: PlatoCardProps) {
    const { agregarPlato } = usePedido();
    const [agregado, setAgregado] = useState<boolean>(false);

    const handleAgregar = (): void => {
        agregarPlato(plato);         // ← Context real — reemplaza el TODO
        setAgregado(true);           // ← feedback visual — se mantiene
        setTimeout(() => setAgregado(false), 1500);
    };

    return (
        <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h3 className="font-bold text-lg mb-1">{plato.nombre}</h3>
            <p className="text-sm text-gray-500 mb-2">{plato.descripcion}</p>
            <p className="text-sm text-gray-400 mb-3 capitalize">{plato.categoria}</p>
            <div className="flex justify-between items-center">
                <span className="font-bold text-blue-700">S/ {plato.precio.toFixed(2)}</span>
                <button
                    onClick={handleAgregar}
                    className={`px-4 py-1 rounded text-sm font-medium transition-colors ${agregado ? 'bg-green-600 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                >
                    {agregado ? '✓ Agregado' : 'Agregar'}
                </button>
            </div>
        </div>
    );
}
/*
// Client Component — el botón 'Agregar' necesita estado local y eventos
'use client'
import type { Plato } from '../../src/types';
import { usePedido } from '@/src/context/PedidoProvider';

interface PlatoCardProps {
    plato: Plato;
}

export default function PlatoCard({ plato }: PlatoCardProps) {
    // Estado local para feedback visual — el Context llega en Día 3
    // Extraemos las funciones y el estado del pedido
    const { pedido, agregarPlato, quitarPlato } = usePedido();
    // Buscamos si este plato ya está en el carrito para saber su cantidad
    const itemEnCarrito = pedido.items.find(i => i.platoId === plato._id);
    const cantidad = itemEnCarrito ? itemEnCarrito.cantidad : 0;
    return (
        <div className="border rounded-lg p-4 bg-white shadow-sm">
            <h3 className="font-bold text-lg mb-1">{plato.nombre}</h3>
            {plato.descripcion && <p className="text-sm text-gray-500 mb-2">{plato.descripcion}</p>}
            <p className="text-sm text-gray-400 mb-3 capitalize">{plato.categoria}</p>
            <div className="flex justify-between items-center">
                <span className="font-bold text-blue-700">S/ {plato.precio.toFixed(2)}</span>
            </div>
            {/* logica de botones}
            {cantidad === 0 ? (
                <button
                    onClick={() => agregarPlato(plato)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Agregar
                </button>
            ) : (
                <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-1">
                    <button
                        onClick={() => quitarPlato(plato._id)}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm text-red-600 font-bold hover:bg-red-50"
                    >
                        -
                    </button>
                    <span className="font-bold min-w-[20px] text-center">{cantidad}</span>
                    <button
                        onClick={() => agregarPlato(plato)}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm text-green-600 font-bold hover:bg-green-50"
                    >
                        +
                    </button>
                </div>
            )}

        </div>
    );
}
*/
