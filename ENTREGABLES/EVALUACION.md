## SECCIÓN F: Evaluación y Cierre del Día 1
**El que escucha hace estas preguntas. El que responde NO puede leer el documento.**

1. ¿Cuál es la diferencia entre la carpeta /mesas (sin corchetes) y la carpeta /[mesaId] (con corchetes)?
**Paolo:** La carpeta /mesas sirve para albergar un page.tsx estatica, en el caso de /mesa/[mesaId] usamos la estructura y los corchetes para declarar la page dentro como dinamica
2. ¿Qué pasa si usas <a href="/menu"> en lugar de <Link href="/menu">?
**Paolo:** Si usamos href estariamos usando el sistema estandar de html, al usar el href a comparacion del link estamos perdiendo velocidad y tiempo del usuario. La diferencia de a href y link es que link hace que la pagina no recargue. Evitando ver pantallas blancas de carga completo del sitio
3. ¿Para qué sirve layout.tsx y qué NO debería ir ahí?
**Paolo:** Layout es el marco para nuestra app, alli dentro podemos agregar headers/foote/navbar ya sea que este afuera de children. Mientras dentro estaran las diferentes paginas.
4. ¿Por qué NavBar necesita 'use client' y page.tsx de MesasPage no necesita esa directiva?
**Paolo:** Con el use client lo declaramos como un componente de lado del cliente y podra usar hooks
5. Si el backend cambia el modelo de Mesa y agrega un campo nuevo, ¿en cuántos archivos de restaurante-nextjs hay que actualizar tipos hoy?
**Paolo**  Si ahora varian los modelos de mesa, se agregaria un nuevo tipo por cada modelo nuevo

# 🏆  Pregunta bonus — demostrar en vivo (vale 2 pts extra)
"Crea en vivo una ruta /reportes/[año]/[mes] que muestre ambos parámetros en pantalla."
5 minutos. Solo con el código del proyecto, sin buscar en internet.
→ Estructura esperada: app/reportes/[año]/[mes]/page.tsx con params.año y params.mes

