# 🔄 Evaluación entre Pares

---

### 1. ¿Por qué PedidoProvider.tsx tiene "use client" pero layout.tsx no necesita "use client" para importarlo?
*   **Joel:** *(Pendiente)*
*   **Paolo:** Porque en layout es de servidor y con toda la normalidad un archivo servidor puede importar un componente cliente. Es regla de nextjs

---

### 2. ¿Qué diferencia hay entre un Server Action y un API Route de Next.js?
*   **Joel:** *(Pendiente)*
*   **Paolo:** Con api route agregabamos todo el endpoint en el mismo api/, en server action lo colocamos cerca de nuestra carpeta/directorio url, ademas server actions se ejecuta en servidor 

---

### 3. ¿Por qué enviarComanda() retorna un objeto { ok: boolean } en lugar de lanzar un Error?
*   **Joel:** *(Pendiente)*
*   **Paolo:** Esta como boolean para saber cuando haya fallado, en caso el boolean sea falso saldra error al hacer enviarcomanda

---

### 4. ¿Qué pasa con el carrito si el usuario recarga la página?
*   **Joel:** *(Pendiente)*
*   **Paolo:** El carro desaparece, todo funciona en localstorage creo

---

### 5. Si quisieras que /carrito también mostrara el estado de la mesa asignada, ¿qué cambio harías? ¿Dónde está ese dato?
*   **Joel:** *(Pendiente)*
*   **Paolo:** Tendriamos que agregar en pedidoprovider una mesa seleccionada y luego asignar un boton en cada mesa para elegirla, luego podemos mostrarlo con el contexto en carrito y enviarlo junto al carro, cambiando el tipado antes

---

# 🏆  Pregunta bonus — demostrar en vivo
"Agrega un selector de tipo de pedido en /carrito: Mesa vs Para llevar. Al seleccionar Mesa, muestra un input para el número de mesa. Todo conectado al Context."
8 minutos. Solo con código. Sin buscar.
→ Pista: cambiarTipo() y asignarMesa() ya existen en el Contex
