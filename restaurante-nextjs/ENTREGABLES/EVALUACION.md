# 🔄 Evaluación entre Pares — Día 5

---

#### 1. ¿Por qué `ComandasPage` puede usar `export const metadata = {}` sin `async`, pero `DetalleMesa` necesita `export async function generateMetadata()`?

*   **Paolo:** Ya que comandaspage es una pagina de administrador, sera una pagina estatica, a comparacion de detalles mesas que cambiaremos la pestaña de mesa segun el id de la mesa 
*   **Joel:** 

<br/>

#### 2. ¿Qué hace `Partial<Record<EstadoPedido, EstadoPedido>>` y por qué es necesario?

*   **Paolo:** Define un objeto cuyas llaves y valores pertenecen al tipo `EstadoPedido`, pero gracias a `Partial`, todas las llaves se vuelven opcionales en lugar de obligatorias. Es necesario porque en nuestro flujo de transiciones (`SIGUIENTE`), los estados finales `'entregada'` y `'cancelada'` no tienen un estado posterior. `Partial` nos permite omitir estos estados finales de la lista sin que TypeScript arroje un error de compilación por llaves incompletas.
*   **Joel:** 

<br/>

#### 3. ¿`revalidatePath` actualiza en tiempo real o al próximo request?

*   **Paolo:** En nuestro caso como admin, al ejecutar una action con revalidatePath, actualiza en tiempo real, como si hubiera presionado f5, ya que borra la cache y manda a nextjs a renderizar el componente del servidor, para que los demas usuarios dentro de la pagina como el cliente vea los cambios, tendra que recargar la pagina o usar un router refresh, para que cargue cierta parte de la app y mostrar datos nuevos
*   **Joel:** 

<br/>

#### 4. ¿Cuáles son los 3 Server Actions del proyecto y qué hace cada uno?

*   **Paolo:** agregamos las actions para las pags, carrito, comandas y mesas
*   **Joel:** 

<br/>

#### 5. ¿Qué pasaría si el backend rechaza la transición por regla de negocio?

*   **Paolo:** En caso en el server actions capturamos el error y damos el mensaje de error en el backend, tambien comandacard mostrara una alerta con el error
*   **Joel:** 

<br/>

---

### 🏆 Pregunta Bonus — Demostración en Vivo

> [!IMPORTANT]
> **Reto:** "Agrega un badge en el NavBar para `/comandas` con el número de comandas pendientes."

*   **Tiempo:** 8 minutos. Sin buscar en internet.
*   **Pista:** `NavBar` es Client Component. Necesita hacer fetch de `/pedidos` desde el cliente o recibir el conteo como prop desde `layout.tsx` (Server Component que puede hacer el fetch).

<br/>

---
*Evaluación de arquitectura y flujo de datos en Next.js.*
