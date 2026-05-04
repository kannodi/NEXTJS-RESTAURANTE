interface ReporteDetailProps {
    params: Promise<{
        año: string
        mes: string
    }>;
}

export default async function ReporteDetailPage({ params }: ReporteDetailProps) {

    const { año, mes } = await params;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Detalle de Reporte</h1>
            <p>Año recibido: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{año}</span></p>
            <p>Mes recibido: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{mes}</span></p>
        </div>
    );
}