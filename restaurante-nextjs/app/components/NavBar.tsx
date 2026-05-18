'use client'; // NavBar usa usePathname (hook) → necesita ser Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { usePedido } from '@/src/context/PedidoProvider';

export default function NavBar() {
    const pathname = usePathname();
    const { pedido } = usePedido();
    // Función helper — detecta si la ruta está activa
    const esActiva = (ruta: string): string => pathname === ruta
        ? 'font-bold text-red-700'
        : 'text-gray-700 hover:text-white-600';
    // contar cantidad de platos en carrito
    const totalUnidades = pedido.items.reduce((acc, item) => acc + item.cantidad, 0);
    return (
        <nav className='bg-white shadow px-6 py-3 flex gap-6'>
            <span className='font-bold text-lg mr-4'>🍽 Restaurante</span>
            <ul className='flex gap-6'>
                <li><Link href='/' className={esActiva('/')}>Home</Link></li>
                <li><Link href='/mesas' className={esActiva('/mesas')}>Mesas</Link></li>
                <li><Link href='/menu' className={esActiva('/menu')}>Menú</Link></li>
                <li><Link href='/carrito' className={esActiva('/carrito')}>Carrito</Link></li>
                <li><Link href='/comandas' className={esActiva('/comandas')}>Comandas</Link></li>
            </ul>
            {/* carrito */}
            {totalUnidades > 0 && (
                <h1 className='ml-10 text-red-700 font-bold'> Carrito: {totalUnidades}</h1>
            )}
        </nav >
    );
}