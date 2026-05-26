# 🔮 Predicciones — Día 7

> [!TIP]
> Espacio para anticipar el comportamiento del código antes de su ejecución. 

---

## ✍️ Predicción — Bloque B

### ¿El primer deploy va a tener errores? ¿Por qué podría fallar si no hemos configurado las variables de entorno todavía?
*   **¿El primer deploy fallará sin las variables de entorno?** 
    **Paolo:** Si ya que faltara la parte del backend
    **Joel:** El 1er deploy fallará.
*   **¿Qué error específico aparecería?** 
    **Paolo:** cuando iniciamos el run dev sin el back sale un error sobre el getplatos, saldra un error al hacer fetch
    **Joel:** Fallará porque la app intentará hacer peticiones a una URL undefined, lo que resultará en un error de fetch failed o un quiebre en la compilación de Next.js.

---

## ✍️ Predicción — Bloque C

### ¿Cuántos redeploys van a necesitar después de configurar las variables — uno o varios?
*   **¿Cuántos redeploys necesita Vercel después de configurar variables?** 
    **Paolo:** 
    **Joel:** Solo se necesita un redeploy para que se reflejen los cambios en la app.
*   **¿Vercel hace el redeploy automáticamente al agregar variables?** 
    **Paolo:** 
    **Joel:** No, los cambios no se reflejan automaticamente, se tiene que volver a ejecutar el comando de vercel para que se reflejen los cambios.
---

## ✍️ Predicción — Bloque D

### ¿Las rutas dinámicas como `/mesa/[id]` van a funcionar en Vercel igual que en localhost? ¿O hay alguna diferencia en cómo Vercel maneja los parámetros?
*   **¿`/mesa/[id]` funciona igual en Vercel?** 
*   **¿Hay alguna diferencia con localhost?** 

---
