## SECCIÓN F: Evaluación y Cierre del Día 1
**El que escucha hace estas preguntas. El que responde NO puede leer el documento.**

1. ¿Cuál es la diferencia entre la carpeta /mesas (sin corchetes) y la carpeta /[mesaId] (con corchetes)?
**Joel:** La carpeta /mesas es una ruta fija para mostrar la lista general de mesas, mientras que /[mesaId] es una ruta dinámica que actúa como variable para poder mostrar los detalles de cualquier mesa en particular, dependiendo del ID que venga en la URL.
**Paolo:** La carpeta /mesas sirve para albergar un page.tsx estatica, en el caso de /mesa/[mesaId] usamos la estructura y los corchetes para declarar la page dentro como dinamica
2. ¿Qué pasa si usas <a href="/menu"> en lugar de <Link href="/menu">?
**Joel:** mientras que 'href' recarga la pagina entera, mientras que 'Link' solo recarga la pagina que cambia.
**Paolo:** Si usamos href estariamos usando el sistema estandar de html, al usar el href a comparacion del link estamos perdiendo velocidad y tiempo del usuario. La diferencia de a href y link es que link hace que la pagina no recargue. Evitando ver pantallas blancas de carga completo del sitio
3. ¿Para qué sirve layout.tsx y qué NO debería ir ahí?
**Joel:** Es el componente que envuelve a todos los demas componentes para armar la estructura de la pagina, puede tener estilos globales, metadatos, etc. Lo que no deberia ir asignado en ese lugar son los hijos, ya que son las rutas que cambian.
**Paolo:** Layout es el marco para nuestra app, alli dentro podemos agregar headers/foote/navbar ya sea que este afuera de children. Mientras dentro estaran las diferentes paginas.
4. ¿Por qué NavBar necesita 'use client' y page.tsx de MesasPage no necesita esa directiva?
**Joel:** NavBar necesita 'use client' porque usa el hook usePathname() para detectar la ruta activa, y los hooks solo funcionan en componentes de cliente (navegador). En cambio, page.tsx de MesasPage no necesita esa directiva porque es un componente de servidor porque solo maneja la estructura estática y no necesita interactividad ni hooks.
**Paolo:** Con el use client lo declaramos como un componente de lado del cliente y podra usar hooks
5. Si el backend cambia el modelo de Mesa y agrega un campo nuevo, ¿en cuántos archivos de restaurante-nextjs hay que actualizar tipos hoy?
**Joel:** En No se harian cambios actualmente. Actualmente (en el Día 1) no tenemos definido el tipo o modelo `Mesa` ni estamos haciendo fetching de datos en el frontend (eso se conectará en el Día 4, como indican los placeholders). Solo tenemos la estructura de rutas y la interfaz `MesaDetailProps` para los parámetros de la URL, por lo que un cambio en el modelo del backend hoy no requiere actualizar tipos en este proyecto de Next.js.
**Paolo**  Si ahora varian los modelos de mesa, se agregaria un nuevo tipo por cada modelo nuevo

# 🏆  Pregunta bonus — demostrar en vivo (vale 2 pts extra)
"Crea en vivo una ruta /reportes/[año]/[mes] que muestre ambos parámetros en pantalla."
5 minutos. Solo con el código del proyecto, sin buscar en internet.
→ Estructura esperada: app/reportes/[año]/[mes]/page.tsx con params.año y params.mes

