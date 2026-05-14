# 🔮 Predicciones de Desarrollo - Día 4

---

## 🏗️ Predicción A: El Endpoint y el ID
**Pregunta:** ¿El backend tiene un endpoint `GET /mesas/:id`? ¿Qué retorna si el ID no existe (un 404 o un objeto vacío)?

*   **¿GET /mesas/:id existe?**
    *   **Paolo:**  Si existe, antigravity nos brindo su ayuda para crear el backend y nosotros crear el frontend
    *   **Joel:** Si cuenta con aquel endpoint.
*   **¿Qué retorna si el ID no existe?**
    *   **Paolo:** Manejaremos un error para indicar que la url ingresada no existe o la mesa no existe
    *   **Joel:** Ahora mismo devuelve un objeto inexistente. Eso es algo que arreglaremos para que devuelva un aviso de que esa mesa no existe.

---

## 🌐 Predicción B: Metadata Dinámica
**Pregunta:** ¿`generateMetadata` puede hacer fetch de datos del backend para construir el title dinámico? ¿O solo puede usar los params de la URL? ¿Puede llamar a `getMesaById()`?

*   **¿Puede hacer fetch/await?**
    *   **Paolo:** Si puede usar fetchj de datos, ya sea para saber en que mesa esta y mostrarlo en la pestaña del navegador.
    *   **Joel:** Si, si puede utilizar await.
    
*   **¿Puede llamar a getMesaById()?**
    *   **Paolo:** Si podemos hacer un doble llamado de la funcion adentro de generateMetadata, de todas maneras  solo se realizara una sola peticion
    *   **Joel:** Si, se puede usar la funcion.

---

## ⏳ Predicción C: Suspense y Skeletons
**Pregunta:** El Suspense manual que envuelve `<MesaDetalle>` en `page.tsx`. ¿Cuándo se muestra exactamente el skeleton? ¿`MesaDetalle` hace fetch o solo usa los datos que recibe por prop?

*   **¿Cuándo se muestra el skeleton?**
    *   **Paolo:** 
    *   **Joel:** 
*   **¿`MesaDetalle` hace fetch propio?**
    *   **Paolo:** 
    *   **Joel:** 

---

## ⚡ Predicción D: Sincronización
**Pregunta:** Después de llamar a `cambiarEstadoMesa()` con éxito, ¿Next.js actualiza `/mesas` automáticamente? ¿Qué hace `revalidatePath` para que eso ocurra?

*   **¿Actualiza automáticamente?**
    *   **Paolo:** 
    *   **Joel:** 
*   **¿Qué hace revalidatePath?**
    *   **Paolo:** 
    *   **Joel:** 

---
