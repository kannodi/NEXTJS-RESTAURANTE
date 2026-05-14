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

*   **Paolo:** 
*   **Joel:** 

---

## ⏱ Feedback 30 segundos — Bloque D
**Pregunta:** ¿`revalidatePath` fue lo que predijiste? ¿Actualiza en tiempo real o al siguiente request?

*   **Paolo:** 
*   **Joel:** 

---

## ⏱ Feedback 30 segundos — Bloque E
**Pregunta:** ¿Cuántos errores TypeScript había antes de resolver?

*   **Paolo:** 
*   **Joel:** 

---
