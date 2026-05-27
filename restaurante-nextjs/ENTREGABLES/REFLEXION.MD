# 🧠 Reflexión Técnica — Día 7

> [!TIP]
> Espacio para documentar aprendizajes, retos superados y análisis técnico durante cada bloque de desarrollo.

---

## ⏱️ Feedback 30 segundos — Bloque A

### ¿Había algún .env commiteado? ¿Cómo lo resolvieron?
*   **Paolo:** No ha habido ningun .env commiteado con aterioridad, en caso haya, se deberia borrar la rama para que este no siga en github
*   **Joel:** El archivo .gitignore ya venía configurado de fábrica por Next.js para ignorar cualquier archivo .env, por lo que no hubo riesgo de que se subiera informacion sensible.

---

## ⏱️ Feedback 30 segundos — Bloque B

### ¿El primer deploy falló como se predijo, o tuvo otro error?
*   **Paolo:** El primer deploy falla, ya que la app busca el backend 
*   **Joel:** El 1er deply falló por la falta de .env

---

## ⏱️ Feedback 30 segundos — Bloque C

### ¿El redeploy fue automático o tuvieron que triggerearlo manualmente?
*   **Paolo:** 
*   **Joel:** El redeploy tuvo que ser manual.

---

## ⏱️ Feedback 30 segundos — Bloque D

### ¿Qué ruta tuvo más problemas en producción? ¿Cómo lo resolvieron? (anota cuáles rutas tienen estado ERROR y la causa)
*   **Paolo:** 
*   **Joel:** No hubo problemas con rutas dinamicas, funcionaron correctamente, al igual que en localhost.

---

## ⏱️ Feedback 30 segundos — Bloque E

### ¿El push del README activó automáticamente un nuevo deploy en Vercel? ¿Tardó más o menos que los anteriores?
*   **Paolo:** 
*   **Joel:** Sí, se activó un nuevo deploy automáticamente. Sin embargo, este deploy tardó mucho menos que el primero porque Vercel usó la caché del build anterior (ya que solo fue un cambio de texto y no de código o dependencias).

---
