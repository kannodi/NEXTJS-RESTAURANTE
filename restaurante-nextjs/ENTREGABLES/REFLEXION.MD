# 🧠 Reflexión Diaria - Día 4

---

## ⏱ Feedback 30 segundos — Bloque A
**Pregunta:** ¿El backend tenía el endpoint `/mesas/:id` o tuvieron que usar la Opción B? ¿Qué implica eso para el rendimiento?

*   **Paolo:** Si tenia el endpoint mesas:id , usamos la opcion A, verificara si el id de la mesa no existe y lanzara error, con esta info manejaremos la vista
*   **Joel:** El backend si contaba con el endpoint. No representa un problema para el rendimiento ya que solo obtenemos los datos de una sola mesa y no de todas.

---

## ⏱ Feedback 30 segundos — Bloque B
**Pregunta:** ¿La predicción sobre `generateMetadata` async fue correcta? ¿Qué implica hacer dos fetches iguales (en metadata y en el componente)?

*   **Paolo:** Si, gracias a nextjs al tener dos fetchs en el mismo archivo, aun hara una sola peticion. No hay problema con tener ambos fetches
*   **Joel:** Si, a pesar de ser dos fetchs, solo se realiza una sola peticion. No genera problemas.

---

## ⏱ Feedback 30 segundos — Bloque C
**Pregunta:** ¿`useTransition` fue más claro o más confuso que un `useState<boolean>` de loading?

*   **Paolo:** No son tan complejos, es solo un poco la teoria de como funcionan, para mi el mas facil es usestate, pero el usetransition es mas simplificado y ahorra codigo
*   **Joel:** Fue más claro porque reduce el código repetitivo. Evitamos tener que cambiar manualmente un estado de carga a true y false usando try/catch/finally. El isPending nos da ese estado automáticamente.

---

## ⏱ Feedback 30 segundos — Bloque D
**Pregunta:** ¿`revalidatePath` fue lo que predijiste? ¿Actualiza en tiempo real o al siguiente request?

*   **Paolo:** revalidate, actualiza los datos inmediatamente de hacer un patch, primero borra el cache y envia a nextjs a recargar ese  vista
*   **Joel:** 

---

## ⏱ Feedback 30 segundos — Bloque E
**Pregunta:** ¿Cuántos errores TypeScript había antes de resolver?

*   **Paolo:** 
*   **Joel:** 

---
