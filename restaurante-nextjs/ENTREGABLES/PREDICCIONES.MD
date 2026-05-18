# 🔮 Predicciones Técnicas — Día 5

> [!NOTE]
> Estas predicciones nos ayudan a entender el flujo de datos antes de escribir una sola línea de código.

---

### 🧱 Predicción A: Infraestructura Backend

**¿El backend tiene `GET /pedidos?estado=pendiente` para filtrar? Verificarlo con Postman antes de escribir código.**

*   **¿Funciona el filtro?**
    *   **Paolo:** No, asi que para filtrar los pedidos no podemos depender del backend, tendremos que hacerlo con el filter en frontend, llamando todos los pedidos usar filter === pendiente/preparacion
    *   **Joel:** 
*   **URL exacta del PATCH para cambiar estado:**
    *   **Paolo:** http://localhost:3001/pedidos/:id/estado , en  :id va el id del pedido y en el body debe enviar el json haciendo patch a estado: y el nuevo estado
    *   **Joel:** 

<br/>

---

### 🧱 Predicción B: Metadatos de Comandas

**¿`generateMetadata` necesita `async` en `/comandas`? ¿Necesita hacer fetch para construir el título?**

*   **¿Puede ser síncrona?**
    *   **Paolo:** 
    *   **Joel:** 
*   **¿Por qué?**
    *   **Paolo:** 
    *   **Joel:** 

<br/>

---

### 🧱 Predicción C: Lógica de Interfaz

**¿Qué muestra `ComandaCard` para un pedido tipo "para_llevar" donde `mesaId` es `null`?**

*   **Para un pedido "para_llevar" muestra:**
    *   **Paolo:** 
    *   **Joel:** 
*   **Para un pedido "mesa" muestra:**
    *   **Paolo:** 
    *   **Joel:** 

<br/>

---

### 🧱 Predicción D: Sincronización de Datos

**Si `avanzarEstadoPedido()` llama a `revalidatePath("/comandas")` en el servidor, ¿`ComandasPage` hace el fetch automáticamente o el usuario tiene que recargar?**

*   **¿La lista se actualiza automáticamente?**
    *   **Paolo:** 
    *   **Joel:** 
*   **¿`router.refresh()` sería necesario en el Cliente?**
    *   **Paolo:** 
    *   **Joel:** 

<br/>

---
*Validación de arquitectura de datos y flujo de trabajo.*
