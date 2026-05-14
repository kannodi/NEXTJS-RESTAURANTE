'use client';
import type { Mesa } from "@/src/types";

export default function MesaDetalle({ mesa }: { mesa: Mesa }) {
    return (
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <h2 className="text-blue-800 font-bold mb-2">Acciones de Mesa</h2>
            <p className="text-blue-600 text-sm mb-4">
                Aquí podrás cambiar el estado de la mesa y gestionar los pedidos activos.
            </p>
            {/* Próximamente: Botones de cambiar estado */}
            <div className="p-4 bg-white/50 rounded-lg text-center text-gray-400 italic">
                Cargando controles de gestión...
            </div>
        </div>
    );
}
