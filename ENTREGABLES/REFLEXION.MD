# Reflexión - Día 1

## SECCIÓN A: Creación y estructura del proyecto Next.js

### 1. ¿La estructura del proyecto fue lo que predijiste?
**Paolo:** Si, fue lo que esperaba, la carpeta app, public y todas las que tiene, lo necesario para iniciar un proyecto con next.js
**Joel:** Si, la carpeta app, public y todas las que tiene albergan lo necesario.

### 2. ¿Qué archivo te sorprendió más y por qué?
**Paolo:** Un poco el layout, poco complejo de entender, pero con practica sera sencillo de comprender, ya que el concepto ya lo entendí
**Joel:** El archivo layout.tsx fue lo que mas me llamo la atencion, ya que es un componente que envuelve a todos los demas componentes, lo que permite reutilizar codigo y mantener una estructura consistente

### 3. Aprendizaje principal del Bloque A
**Paolo:** Aprendimos a iniciar un proyecto con next.js y a entender su estructura base, ademas de limpiar los archivos que no necesitamos. Con nextjs podemos crear paginas web mas rapidas gracias a que el servidor precarga y luego la recibimos
**Joel:** Aprendi que en nextjs tenemos rutas por defecto, lo que hace que sea mas facil crear paginas, ademas de que podemos usar componentes de react para crear paginas, lo que hace que sea mas facil reutilizar codigo

## SECCIÓN B: Layout raíz y NavBar migrado

### 1. Directiva 'use client'
*¿Por qué `use client` es necesario en NavBar pero no en layout.tsx? ¿Qué diferencia hay?*
**Respuesta:** 
**Paolo:** Es necesario porque el NavBar usa el hook `usePathname()` para detectar la ruta activa, y los hooks solo funcionan en componentes de cliente (navegador). En cambio, `layout.tsx` es un componente de servidor porque solo maneja la estructura estática y no necesita interactividad ni hooks.
**Joel:** En navbar es necesario su uso para poder usar funciones de navegadores como el usePathname(), mientras que en layout.tsx no es necesario ya que es un componente de servidor.

## SECCIÓN C: Mapear las rutas del restaurante como carpetas

### 1. El "Clic" del App Router
*Viendo la tabla de comparación entre React Router y App Router: ¿Fue este el momento donde la lógica de Next.js "hizo clic" en tu cabeza? ¿Qué parte de esta conversión fue la más reveladora?*
**Respuesta:**
**Paolo:** El ya no usar app.tsx no lo llenamos de routes, ahora solo usamos la estructura de carpetas, para hacer las pages dentro

**Joel:** 
Si, ya lo entiendó. Lo mas revelador fue ver que ya no necesitamos mas que las carpetas y los archivos `page.tsx` para que el proyecto funcione.
