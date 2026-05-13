# 🔄 Evaluación entre Pares

---

### 1. ¿Por qué PedidoProvider.tsx tiene "use client" pero layout.tsx no necesita "use client" para importarlo?
*   **Joel:** Eso se debe a que Layout es un Server Component y puede importar componentes cliente sin problemas. Sin embargo, PedidoProvider necesita "use client" porque usa hooks de React.
*   **Paolo:** Porque en layout es de servidor y con toda la normalidad un archivo servidor puede importar un componente cliente. Es regla de nextjs

---

### 2. ¿Qué diferencia hay entre un Server Action y un API Route de Next.js?
*   **Joel:** La diferencia radica en cómo y dónde se ejecutan. Las API Routes son endpoints HTTP tradicionales que se ejecutan en el servidor y devuelven respuestas HTTP (JSON, HTML, etc.), mientras que los Server Actions son funciones que se definen en componentes del servidor y se pueden llamar directamente desde el cliente, permitiendo una integración más fluida con el estado y los datos de la aplicación.
*   **Paolo:** Con api route agregabamos todo el endpoint en el mismo api/, en server action lo colocamos cerca de nuestra carpeta/directorio url, ademas server actions se ejecuta en servidor 

---

### 3. ¿Por qué enviarComanda() retorna un objeto { ok: boolean } en lugar de lanzar un Error?
*   **Joel:** Eso se debe a que asi podemos manejar la exepcion en cliente sin problemas y no romper la app.
*   **Paolo:** Esta como boolean para saber cuando haya fallado, en caso el boolean sea falso saldra error al hacer enviarcomanda

---

### 4. ¿Qué pasa con el carrito si el usuario recarga la página?
*   **Joel:** Se reinicia el carrito, el estado es local.
*   **Paolo:** El carro desaparece, todo funciona en localstorage creo

---

### 5. Si quisieras que /carrito también mostrara el estado de la mesa asignada, ¿qué cambio harías? ¿Dónde está ese dato?
*   **Joel:** Para ello solo necesitaríamos agregar una variable dentro del pedidoprovider, ya sea un estado o una función que devuelva el estado de la mesa seleccionada. Luego de eso solo lo importariamos en carrito y lo mostraríamos.
*   **Paolo:** Tendriamos que agregar en pedidoprovider una mesa seleccionada y luego asignar un boton en cada mesa para elegirla, luego podemos mostrarlo con el contexto en carrito y enviarlo junto al carro, cambiando el tipado antes

---

# 🏆  Pregunta bonus — demostrar en vivo
"Agrega un selector de tipo de pedido en /carrito: Mesa vs Para llevar. Al seleccionar Mesa, muestra un input para el número de mesa. Todo conectado al Context."
8 minutos. Solo con código. Sin buscar.
→ Pista: cambiarTipo() y asignarMesa() ya existen en el Contex
