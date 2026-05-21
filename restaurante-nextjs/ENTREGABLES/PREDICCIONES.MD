# 🔮 Predicciones Técnicas — Día 6

> [!NOTE]
> Estas predicciones nos ayudan a razonar sobre la arquitectura, el rendimiento y la configuración de Next.js antes de ejecutar el build de producción.

---

## 🧱 Predicción A — Arquitectura de Metadatos

### ¿`CarritoPage` puede exportar metadata? ¿Por qué sí o por qué no?
*   **Paolo:** No puede ya que es Client Component 
*   **Joel:** No, no puede
### ¿Qué hace que sea imposible? 
*   **Paolo:** Esto es ya que un userclient llega luego para la pagina ya renderizada por el servidor, es por eso que usamos un useEffect para que se ejecute luego de renderizar y declarar el titulo
*   **Joel:** La razon se eso es que es un componente del cliente y no puede exportar metadata.

---

## 🧱 Predicción B — Optimización de Imágenes

### Si el restaurante usa imágenes de platos almacenadas en un servicio externo (como Cloudinary o AWS S3), ¿qué hay que configurar en `next.config.ts` para que `<Image>` de Next.js las muestre?
*   **¿Dónde se configura para imágenes externas?** 
    *   **Paolo:** 
    *   **Joel:** para la configuracion de imagenes externas se debe de configurar en el archivo next.config.ts, en la propiedad images.
*   **¿Qué campo de `next.config.ts` controla eso?** 
    *   **Paolo:** 
    *   **Joel:** El campo de next.config.ts que controla la configuracion de imagenes externas es la propiedad images, que debe tener un arreglo en remotePatterns, y dentro de ese arreglo un objeto con la propiedad hostname y protocol.

---

## 🧱 Predicción D — Compilación en Producción (Build)

### Si el backend no está corriendo cuando ejecutas `npm run build`, ¿el build va a fallar para las páginas con `generateMetadata` async que hacen fetch?
*   **¿El build falla si el backend está caído?** 
    *   **Paolo:** 
    *   **Joel:** 
*   **¿Por qué?** 
    *   **Paolo:** 
    *   **Joel:** 

---
*Análisis previo y control de calidad en entornos de producción Next.js.*
