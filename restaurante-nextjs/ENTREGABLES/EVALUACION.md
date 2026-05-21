# 🔄 Evaluación entre Pares — Día 6

> [!NOTE]
> Evaluación de arquitectura de metadatos, optimización de compilación y estructura de rutas en Next.js App Router.

---

## 📋 Preguntas con Respuesta Esperada

### 1. ¿Por qué `CarritoPage` no puede exportar metadata y las otras páginas sí?
*   **Paolo:** 
*   **Joel:** 

---

### 2. ¿Qué hace `metadata.title.template` en `layout.tsx`?
*   **Paolo:** 
*   **Joel:** 

---

### 3. ¿Por qué es importante limpiar los `console.log` antes del deploy?
*   **Paolo:** 
*   **Joel:** 

---

### 4. ¿Qué indica el icono `λ` (Lambda) en la salida de `npm run build`?
*   **Paolo:** 
*   **Joel:** 

---

### 5. Si mañana el equipo quiere agregar una nueva ruta `/historial` que muestre pedidos por fecha, ¿qué archivos necesitan crear en `restaurante-nextjs/`?
*   **Paolo:** 
*   **Joel:** 

---

## 🏆 Pregunta Bonus — Demostración en Vivo

> [!IMPORTANT]
> **Reto:** *"Agrega a `next.config.ts` una redirección: si alguien visita `/carta`, debe ser redirigido a `/menu`."*
> 
> *   **Tiempo:** 5 minutos. Solo en `next.config.ts` — sin buscar en internet.
> *   **Pista:** `next.config.ts` tiene un método `async redirects()` similar a `async headers()`.


---

## 🎬 Estructura Obligatoria del Video Loom (5 minutos)

> [!WARNING]
> **Escena obligatoria:** Mostrar la salida del `npm run build` exitoso y navegar por todas las rutas con sus títulos únicos. Sin estas tomas el video no será válido.

*   **Minuto 1 — Integrante A (Sin apuntes):**
    Explicar cuáles páginas pueden exportar metadata y cuáles no, justificando el porqué. Listar las rutas del proyecto indicando si usan metadatos estáticos o dinámicos.
    
*   **Minutos 2-4 — Integrante B (Compartir pantalla EN VIVO):**
    Navegar por todas las rutas del proyecto mostrando los títulos dinámicos y únicos en la pestaña del browser. Luego, mostrar la salida completa y exitosa de `npm run build` en la terminal, demostrando que compila a la perfección.
    
*   **Minuto 5 — Ambos Integrantes:**
    Debatir si el proyecto está listo para el deploy del Día 7 y listar qué configuraciones críticas de variables de entorno y dominios faltan ajustar en el panel de Vercel.

---
*Evaluación de calidad de código y preparación para el despliegue en producción.*
