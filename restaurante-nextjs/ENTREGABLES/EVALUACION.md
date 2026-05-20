# 🔄 Evaluación entre Pares — Día 5

---

#### 1. ¿Por qué `ComandasPage` puede usar `export const metadata = {}` sin `async`, pero `DetalleMesa` necesita `export async function generateMetadata()`?

*   **Paolo:** 
*   **Joel:** ComandasPage puede usar `export const metadata = {}` sin `async` porque no necesita datos dinámicos para generar los metadatos, mientras que `DetalleMesa` necesita `export async function generateMetadata()` porque necesita datos dinámicos (el ID de la mesa) para generar los metadatos.

<br/>

#### 2. ¿Qué hace `Partial<Record<EstadoPedido, EstadoPedido>>` y por qué es necesario?

*   **Paolo:** 
*   **Joel:** Lo que hace `Partial<Record<EstadoPedido, EstadoPedido>>` es crear un objeto donde las claves son los estados del pedido y los valores son los estados del pedido, y luego hace que todas las propiedades sean opcionales. Esto es necesario porque `transitionState` es un objeto que contiene las transiciones de estado del pedido y `partial` hace que todas las propiedades sean opcionales, lo que permite que el objeto sea `undefined`. Sin `partial`, el objeto sería `required` y no podría ser `undefined`.

<br/>

#### 3. ¿`revalidatePath` actualiza en tiempo real o al próximo request?

*   **Paolo:** 
*   **Joel:** En el caso de revalidatePath se actualiza al próximo request, ya que esta funcion lo que hace es invalidar la cache de la ruta especificada, y esto provoca que la próxima vez que se acceda a la ruta, se vuelva a generar la página. Por lo tanto no es en tiempo real.

<br/>

#### 4. ¿Cuáles son los 3 Server Actions del proyecto y qué hace cada uno?

*   **Paolo:** 
*   **Joel:** Los Server Actions del proyecto son: 
    1. `crearPedido`: Crea un pedido en la base de datos.
    2. `actualizarEstadoPedido`: Actualiza el estado de un pedido en la base de datos.
    3. `actualizarEstadoPago`: Actualiza el estado de pago de un pedido en la base de datos.

<br/>

#### 5. ¿Qué pasaría si el backend rechaza la transición por regla de negocio?

*   **Paolo:** 
*   **Joel:** Si el Backend rechazara la transicion por regla de negocio, la funcion actualizarEstadoPedido lanzaria un error y se mostraria un mensaje de error en la consola del navegador y no se actualizaría el estado del pedido.

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
