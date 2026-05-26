import type { Plato } from "@/src/types";
interface CardsPlatosProps {
    plato: Plato;
    imagenManual: string;
}

export default function CardsPlatos({ plato, imagenManual }: CardsPlatosProps) {
    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
                src={imagenManual} // imagenmanualpara cada mapeo
                alt={plato.nombre}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{plato.nombre}</h3>
                <p className="text-gray-600 mb-4">{plato.descripcion}</p>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-orange-500">S/{plato.precio}</span>
                </div>
            </div>
        </div>
    );
}
