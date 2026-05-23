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
    *   **Paolo:** Para que nuestra app acepte y trate las imagenes debemos darle permisos dentro de la config de next.config.ts y estar seguros de donde vienen, estas seran optimizadas por el servidor de nextjs, debemos saber bien de donde aceptamos imagenes para no ser afectados por atacantes
    *   **Joel:** para la configuracion de imagenes externas se debe de configurar en el archivo next.config.ts, en la propiedad images.
*   **¿Qué campo de `next.config.ts` controla eso?** 
    *   **Paolo:** El campo que controla esto es el objeto `images` y, dentro de este, el arreglo `remotePatterns` (patrones remotos). En este arreglo definimos objetos con los campos `protocol`, `hostname` y `pathname` para autorizar servidores específicos (como Cloudinary o AWS S3) de forma segura.
    *   **Joel:** El campo de next.config.ts que controla la configuracion de imagenes externas es la propiedad images, que debe tener un arreglo en remotePatterns, y dentro de ese arreglo un objeto con la propiedad hostname y protocol.

---

## 🧱 Predicción D — Compilación en Producción (Build)

### Si el backend no está corriendo cuando ejecutas `npm run build`, ¿el build va a fallar para las páginas con `generateMetadata` async que hacen fetch?
*   **¿El build falla si el backend está caído?** 
    *   **Paolo:** Si fallaria y nos daria el error
    *   **Joel:** Si el backend no esta corriendo cuando se ejecuta el npm run build, el build va a fallar.
*   **¿Por qué?** 
    *   **Paolo:** ya que esas pages son dinamicas y necesitan los fetchs para su renderizacion, en nuestro caso tenemos manejo de errores con try catch, en caso falle el metadata dara mesa no encontrada en caso de mesaid
    *   **Joel:** Fallara en las paginas que utilizan la funcion generateMetadata, ya que estas paginas hacen fetch a la API del backend para obtener los datos que se necesitan para generar los metadatos.

---
*Análisis previo y control de calidad en entornos de producción Next.js.*
