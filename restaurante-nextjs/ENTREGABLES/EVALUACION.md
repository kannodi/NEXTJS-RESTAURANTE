## 🔄  Evaluación entre pares — preguntas con respuesta esperada
1. ¿Por qué MesasPage no tiene useState ni useEffect?
    **Paolo:** Ya que es un server component, si quisiera poder usar hooks debemos declararlo user client
    **Joel:** 
2. ¿Por qué MesaCard necesita 'use client' pero MesasPage no?
    **Paolo:** Ya que es un componente cliente, usa boton y importa useRouter 
    **Joel:**
3. ¿Qué hace loading.tsx? ¿Quién lo activa?
    **Paolo:** Este se activa al esperar un fetch, nextjs lo hace automaticamente, con solo declarar un archivo con el nombre loading y estando en la misma carpeta del componente que lo llama
    **Joel:**
4. ¿Qué diferencia hay entre cache: no-store y cache: force-cache en el fetch?
    **Paolo:** el no store es para datos que necesitamos que siempre esten frescos/ recietes, el force cache nos da datos no tan actualizados.
    **Joel:**
5. Si el backend devuelve Mesa con un campo nuevo activo: boolean que no está en types/index.ts, ¿TypeScript lo detecta? ¿Dónde exactamente?
    **Paolo:**Si viene directamente del backend, no lo detectariamos en tiempo de compilacion, ya que no puede ver y ts se fia de lo que los tipos que le damos a la central index.ts
    **Joel:**



# 🏆  Pregunta bonus — demostrar en vivo
# "Agrega una ruta /categorias que muestre solo las categorías únicas de los platos — sin repetir. El fetch al backend ya existe."
# 5 minutos. Solo Server Component. Sin buscar en internet.
# → Pista: getPlatos() + .map(p => p.categoria) + [...new Set(categorias)]

