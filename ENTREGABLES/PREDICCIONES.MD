# Predicción A

## 1. Estructura de carpetas generada por `create-next-app`
*¿Qué estructura de carpetas esperas ver de memoria antes de ejecutar el comando?*

  **Paolo** Al ejecutar el comando se creara una estructura base, que nos mostrara en la page "next.js" y a partir de alli podremos crear nuestras carpetas y archivos.
  
  **Joel:**
  - app/ (o src/app/): Aquí es donde van las rutas, componentes y la lógica de la aplicación.
  - public/: La carpeta donde se guardan los archivos estáticos como imágenes, íconos (favicon) o fuentes que son accesibles públicamente.
  - node_modules/: Donde se instalan todas las dependencias y librerías que usa el proyecto.

## 2. Archivo de rutas
*¿Existe un archivo de rutas tipo `App.tsx` en Next.js App Router?*

  **Paolo** No, en next.js tenemos enrutado segun las carpetas y con la condicion de que adentro de estas haya un page

- **Joel:**
  No, no existe un archivo central de rutas. Next.js App Router utiliza un enrutamiento basado en el sistema de archivos (File-system based routing). Por tanto, las rutas se definen automáticamente por la estructura de carpetas que creamos dentro del directorio app/.


## 3. Exploración de la estructura (¡Sin ejecutar nada todavía!)
*Anota qué crees que hace cada uno de estos archivos:*

- **`app/layout.tsx`**: 
  - **Paolo:** Aqui  puede ir un navbar/header/o footer pero afuera de children para que se mantenga estatico y dentro de children iran las paginas/rutas dinamicas.
  - **Joel:** Es el componente que envuelve a todos los demas componentes para armar la estructura de la pagina, puede tener estilos globales, metadatos, etc.

- **`app/page.tsx`**: 
  - **Paolo:** Dentro va la pagina en si, todo lo que queremos dibujar dependiendo la pagina
  - **Joel:** Es la ruta principal de la aplicacion, aqui es donde se muestra la interfaz visual de la pagina.

- **`app/globals.css`**: 
  - **Paolo:** Aqui dentro se aplican los estilos generales para todo, un h1, un contenedor, algun div.Estos estilos se aplican para todas las rutas.
  - **Joel:** Es el archivo donde se definen los estilos globales de la aplicacion.

- **`public/`**: 
  - **Paolo:** Aca dentro van archivos, imagenes o videos que son para los usuarios que visiten la pagina, todos pueden acceder.
  - **Joel:** Es la carpeta donde se guardan los archivos estáticos de la aplicacion.

- **`tsconfig.json`**: 
  - **Paolo:** Aun lleva configs de ts como en el anterior proyecto, pero con la diferencia que ahora lleva unas para nextjs especificas para el app router y server components
  - **Joel:** Es el archivo donde se definen las configuraciones del compilador de TypeScript.
  
- **`next.config.ts`**: 
  - **Paolo:** Es una config dedicada a nextjs, ayuda a config dominios permitidos para imagenes externas o añadir variables de entorno que el server necesita
  - **Joel:** Es el archivo donde se definen las configuraciones de Next.js.


# Predicción B

## NavBar y adaptación a Next.js
*El NavBar de React Día 1 usaba NavLink con activeClassName o className con función. ¿Eso va a funcionar en Next.js sin cambios, o necesita adaptación?*

- **¿NavLink funciona en Next.js?**

  **Paolo:** No, no funciona
  
  **Joel:** No, el componente NavLink no está disponible en next/navigation.

- **¿Qué import cambia?**

  **Paolo:** Ahora hacemos uso del usePathname lo importamos de next/navigation y lo usamos con una constante pasandole el usePathname, esto le da el valor de la ruta actual y con este valor lo comparamos, si es igual a la ruta en la que estamos entonces ponte de tal color, sino ponte gris.

  **Joel:** Ahora recurrimos al usePathname de next/navigation. Con esto sabremos en que ruta nos encontramos.

## Predicción C: Mapear las rutas del restaurante como carpetas

# 1. Creación de Carpetas
*¿Cuántas carpetas van a crear en este bloque? Lista los nombres de las carpetas antes de ejecutarlas.*
**Paolo:** Crearemos 3 carpetas dentro de app/. Los nombres serán mesas, menu y carrito

**Joel:**
3 carpetas
- app/mesas
- app/menu
- app/carrito

# 2. Archivos de Ruta
*¿Cuáles son las rutas completas de los archivos `page.tsx` que deben crear?*
**Paolo:** Las rutas exactas son: app/mesas/page.tsx, app/menu/page.tsx y app/carrito/page.tsx

**Joel:** 
son 3 archivos:
- app/mesas/page.tsx
- app/menu/page.tsx
- app/carrito/page.tsx

## Predicción D: Ruta dinámica /mesa/[mesaId] y Link en NavBar

# 1. Recepción de Parámetros
*¿Cómo llega el parámetro mesaId al componente page.tsx? ¿Como prop, como hook, o de otra forma?*
**Paolo:** Como prop, gracias a los corchetes [mesaId] 

**Joel:** 

# 2. Tipo de Dato
*¿Es string o puede ser number?*
**Paolo:**  Es string ya que puede variar su valor, una id puede ser numeros y letras

**Joel:**
