# 🔄 Evaluación entre Pares — Día 6

> [!NOTE]
> Evaluación de arquitectura de metadatos, optimización de compilación y estructura de rutas en Next.js App Router.

---

## 📋 Preguntas con Respuesta Esperada

### 1. ¿Por qué `CarritoPage` no puede exportar metadata y las otras páginas sí?
*   **Paolo:** 
*   **Joel:** No puede exportar metadata ya que es un componente del cliente y no puede acceder a la metadata de la pagina.

---

### 2. ¿Qué hace `metadata.title.template` en `layout.tsx`?
*   **Paolo:** 
*   **Joel:** Lo que hace metadata.title.template es permitirnos modificar el titulo de todas las paginas a la vez, para que la pagina tenga un titulo unico.

---

### 3. ¿Por qué es importante limpiar los `console.log` antes del deploy?
*   **Paolo:** 
*   **Joel:** Es importante porque los console log acumulan datos impresos en la consola que afectan el rendimiento de la aplicacion.

---

### 4. ¿Qué indica el icono `λ` (Lambda) en la salida de `npm run build`?
*   **Paolo:** 
*   **Joel:** Ese icono Lambda indica que se esta generando una pagina dinamica, y la letra que le sigue es el hash de la pagina. que suele ser de la ruta o el componente que se esta generando. En nuestro caso indica que se esta generando el componente de menu dinamico que viene desde la data de la api, por lo tanto es un componente dinamico y no estatico. 

---

### 5. Si mañana el equipo quiere agregar una nueva ruta `/historial` que muestre pedidos por fecha, ¿qué archivos necesitan crear en `restaurante-nextjs/`?
*   **Paolo:** 
*   **Joel:** Los archivos a crear serian /app/historial/page.tsx, el layout lo tomaria de la raiz de la aplicacion y tambien podriamos crear un layout propio para la ruta /historial.

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
