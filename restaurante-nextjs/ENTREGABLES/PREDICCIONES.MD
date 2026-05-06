## Predicción A - ✍  Antes de ejecutar — escribe en predicciones.md
1. ¿Qué prefijo necesitan las variables de entorno de Next.js para que sean accesibles en el browser? ¿Y si solo necesitan estar en el servidor?

- Prefijo para variables accesibles en el browser:
    **Paolo:** se utiliza el prefijo NEXT_PUBLIC_. Sin este prefijo, Next.js bloquea el acceso a la variable desde el navegador por seguridad, incluso si el componente tiene la directiva "use client"
    **Joel:** Las variables necesitan el prefijo NEXT_PUBLIC_
- Prefijo para variables solo del servidor:  
    **Paolo:**De por si los archivos nextjs ya funcionan en el servidor, no se necesita ningun prefijo
    **Joel:** No necesitan prefijo
    
## Predicción B - ✍  Antes de ejecutar — escribe en predicciones.md
1. MesasPage llama a getMesas() con await. Si el backend tarda 2 segundos en responder, ¿qué ve el usuario durante esos 2 segundos? ¿Una pantalla en blanco, el layout con NavBar, o el skeleton de loading.tsx?

- El usuario ve durante el fetch: 
    **Paolo:** El navbar lo vera, y abajo si lo adecuamos como queremos, podemos reemplazar la pantalla blanca que tiene por defecto con un skeleton loader, este tiene el estilo de la pagina pero sin datos, ideal para que el usuario no se pierda
    **Joel:** El usuario veria el navbar y la pantalla en blanco dado que el await todavia no ha cargado las mesas.
- ¿Quién muestra el loading — MesasPage o loading.tsx? 
    **Paolo:** Mesaspage no podria mostrarlo el muestra los datos una sola vez y es un server component, loading.tsx se encargaria de mostrarlo cuando aun se esta realizando el fetch
    **Joel:** El archivo loading.tsx, ya que MesasPage es un server component y no puede mostrar el loading

# Predicción C - ✍  Antes de ejecutar — escribe en predicciones.md
1. ¿error.tsx captura errores de JavaScript (como un error de sintaxis en el código) o solo errores del fetch (como un 500 del backend)?
- error.tsx captura: 
    **Paolo:** 
    **Joel:** 
- ¿Qué pasa si getMesas() lanza un Error con mensaje "503"? 
    **Paolo:** 
    **Joel:** 

