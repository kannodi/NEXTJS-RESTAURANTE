// app/layout.tsx
// Server Component — SIN "use client"
// Puede importar Client Components (como PedidoProvider y NavBar)
import type { Metadata } from 'next';
import './globals.css';
import NavBar from './components/NavBar';
import PedidoProvider from '@/src/context/PedidoProvider';

/*export const metadata: Metadata = {
  title: {
    default: 'Sistema de Restaurante',
    template: '%s — Sistema de Restaurante',
    // template aplica a todas las páginas que definen metadata
  },
  description: 'Panel de gestión de mesas, menú y comandas del restaurante.',
  robots: {
    index: false,   // app interna — no indexar en Google
    follow: false,
  },
  openGraph: {
    title: 'Sistema de Restaurante',
    description: 'Panel de gestión de mesas, menú y comandas del restaurante.',
    type: 'website',
    locale: 'es_PE',
    // url: agregar la URL de producción en el Día 7 después del deploy
  },
  twitter: {
    card: 'summary',
    title: 'Sistema de Restaurante',
    description: 'Panel de gestión de mesas, menú y comandas del restaurante.',
  },
};*/

export const metadata: Metadata = {
  title: {
    default: 'Sistema de Restaurante',
    template: '%s — Sistema de Restaurante',
  },
  description: 'Panel de gestión de mesas, menú y comandas del restaurante.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Sistema de Restaurante',
    description: 'Panel de gestión de mesas, menú y comandas del restaurante.',
    type: 'website',
    locale: 'es_PE',
    url: 'https://nextjs-restaurante-omega.vercel.app/',  // URL real
  },
  twitter: { card: 'summary', title: 'Sistema de Restaurante', description: '...' },
};


export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang='es'>
      <body className='bg-gray-50 min-h-screen'>
        <PedidoProvider>
          <NavBar />
          <main className='p-6'>{children}</main>
        </PedidoProvider>
      </body>
    </html>
  );
}
