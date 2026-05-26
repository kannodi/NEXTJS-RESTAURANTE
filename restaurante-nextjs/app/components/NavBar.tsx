'use client'; // NavBar usa usePathname (hook) → necesita ser Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePedido } from '@/src/context/PedidoProvider';
import { useEffect, useState } from 'react';
import type { Pedido } from '@/src/types';

export default function NavBar() {
    const pathname = usePathname();
    const { pedido } = usePedido();
    const [count, setCount] = useState<number>(0);

    // Función para obtener las comandas pendientes desde el cliente
    const fetchPendientes = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pedidos`);
            if (res.ok) {
                const pedidos: Pedido[] = await res.json();
                // filtrar solo las que tienen estado 'pendiente'
                const pendientes = pedidos.filter(p => p.estado === 'pendiente').length;
                setCount(pendientes);
            }
        } catch (err) {
            console.error("Error al obtener comandas pendientes:", err);
        }
    };

    useEffect(() => {
        fetchPendientes();

        // Hace un sondeo (polling) cada 5 segundos
        const interval = setInterval(fetchPendientes, 5000);
        return () => clearInterval(interval);
    }, [pathname]);

    // Función helper — detecta si la ruta está activa
    const esActiva = (ruta: string): string => pathname === ruta
        ? 'font-bold text-red-700'
        : 'text-gray-700 hover:text-white-600';

    // contar cantidad de platos en carrito
    const totalUnidades = pedido.items.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <nav className='bg-white shadow px-6 py-3 flex gap-6 items-center justify-between'>
            <div className='flex gap-6 items-center'>
                <span className='font-bold text-lg mr-4'>🍽 Restaurante</span>
                <ul className='flex gap-6 items-center'>
                    <li><Link href='/' className={esActiva('/')}>Home</Link></li>
                    <li><Link href='/mesas' className={esActiva('/mesas')}>Mesas</Link></li>
                    <li><Link href='/menu' className={esActiva('/menu')}>Menú</Link></li>
                    <li><Link href='/carrito' className={esActiva('/carrito')}>Carrito</Link></li>
                    <li className='flex items-center gap-1'>
                        <Link href="/comandas" className={esActiva("/comandas")}>
                            Comandas
                        </Link>
                        {/* BADGE ELEGANTE CON PULSACIÓN ANIMADA */}
                        {count > 0 && (
                            <span className='bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full '>
                                {count}
                            </span>
                        )}
                    </li>
                </ul>
            </div>

            {/* Carrito */}
            {totalUnidades > 0 && (
                <h1 className='text-red-700 font-bold'> Carrito: {totalUnidades}</h1>
            )}
        </nav >
    );
}
