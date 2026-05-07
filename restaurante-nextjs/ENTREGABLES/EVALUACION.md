## 🔄  Evaluación entre pares — preguntas con respuesta esperada
1. ¿Por qué MesasPage no tiene useState ni useEffect?
    **Paolo:**
    **Joel:** 
2. ¿Por qué MesaCard necesita 'use client' pero MesasPage no?
    **Paolo:**
    **Joel:**
3. ¿Qué hace loading.tsx? ¿Quién lo activa?
    **Paolo:**
    **Joel:**
4. ¿Qué diferencia hay entre cache: no-store y cache: force-cache en el fetch?
    **Paolo:**
    **Joel:**
5. Si el backend devuelve Mesa con un campo nuevo activo: boolean que no está en types/index.ts, ¿TypeScript lo detecta? ¿Dónde exactamente?
    **Paolo:**
    **Joel:**



# 🏆  Pregunta bonus — demostrar en vivo
# "Agrega una ruta /categorias que muestre solo las categorías únicas de los platos — sin repetir. El fetch al backend ya existe."
# 5 minutos. Solo Server Component. Sin buscar en internet.
# → Pista: getPlatos() + .map(p => p.categoria) + [...new Set(categorias)]

