## 🔄  Evaluación entre pares — preguntas con respuesta esperada
1. ¿Por qué MesasPage no tiene useState ni useEffect?
    **Paolo:**
    **Joel:** Porque es un componente Server y no necesita estado, ademas los datos los obtenemos directamente desde la API.
2. ¿Por qué MesaCard necesita 'use client' pero MesasPage no?
    **Paolo:**
    **Joel:** MesaCard lo necesita porque usa eventos del cliente, ademas de que necesito usar useState para mostrar el feedback visual de agregado.
3. ¿Qué hace loading.tsx? ¿Quién lo activa?
    **Paolo:**
    **Joel:** Loading.tsx se encarga de mostrar un mensaje de error y un boton para reintentar cuando haya un error en la peticion. Lo activa Nextjs cuando MesasPage hace el await de los datos.
4. ¿Qué diferencia hay entre cache: no-store y cache: force-cache en el fetch?
    **Paolo:**
    **Joel:** La diferencia es que cache: 'no-store' hace que los datos se soliciten en cada visita (ideal para datos dinámicos que cambian constantemente), mientras que cache: 'force-cache' guarda los datos en el servidor y los reutiliza para todos los usuarios (ideal para datos estáticos, mejorando el rendimiento).
5. Si el backend devuelve Mesa con un campo nuevo activo: boolean que no está en types/index.ts, ¿TypeScript lo detecta? ¿Dónde exactamente?
    **Paolo:**
    **Joel:** Si, si lo detecta, exactamente en types/index.ts.



# 🏆  Pregunta bonus — demostrar en vivo
# "Agrega una ruta /categorias que muestre solo las categorías únicas de los platos — sin repetir. El fetch al backend ya existe."
# 5 minutos. Solo Server Component. Sin buscar en internet.
# → Pista: getPlatos() + .map(p => p.categoria) + [...new Set(categorias)]

