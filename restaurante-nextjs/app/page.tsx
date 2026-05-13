import { getPlatos } from "@/src/services/api";
import type { Plato } from "@/src/types";
import CardsPlatos from "./CARDSPRINCIPALES";

export default async function Home() {
  const platos: Plato[] = await getPlatos();

  // 1. Definimos las imágenes para cada ID que viene del backend
  const imagenesPlatos: Record<string, string> = {
    "p1": "/hamburguesa.jpg",
    "p3": "/ensalada.jpg",
    "p2": "/pizza.jpg",
    "p5": "/sushi.jpg",
    "p4": "/tacos.jpg",
  };

  return (
    <main className="max-w-7xl mx-auto p-6">
      <div className="bg-yellow-500 p-8 text-center rounded-xl mb-8">
        <h1 className="text-3xl font-bold text-white">Restaurante</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {platos.map((plato: Plato) => (
          <CardsPlatos
            key={plato._id}
            plato={plato}
            imagenManual={imagenesPlatos[plato._id]}
          />
        ))}
      </div>
    </main>
  );
}

