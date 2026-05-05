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
    **Paolo:** 
    **Joel:** 
- ¿Quién muestra el loading — MesasPage o loading.tsx? 
    **Paolo:** 
    **Joel:** 


