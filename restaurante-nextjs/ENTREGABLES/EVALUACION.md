# 📝 Evaluación final del sprint

> [!WARNING]
> El que escucha hace estas preguntas. El que responde NO puede leer el documento.

---

### 1. ¿Cuál es la diferencia entre un Server Component y un Client Component en Next.js App Router?
*   **Paolo:**El server component se renderiza primero, para luego ser renderizado UNA sola vez, no puede llevar hooks ni puede recibir acciones del usuario, el client component funciona una vez cargada la pagina, puede cambiar y puede ejecutar botones con actions y demas
*   **Joel:**

---

### 2. ¿Cuántos Server Actions tiene restaurante-nextjs? ¿Qué hace cada uno?
*   **Paolo:**en las rutas carrito, comandas y mesa, tenemos archivos de actions, para poder cambiar el estado de la mesa(/mesa), para poder avanzar el estado de pedido como admin(/comandas) y para enviar el pedido(/carrito)
   **Joel:**

---

### 3. ¿Por qué PedidoProvider tiene "use client" pero layout.tsx no necesita "use client" para importarlo?
*   **Paolo:**Ya que pedido provider es parte del contexto, debe usar un import use context, el contexto en si, para eso debe ser de cliente, ya que layout es server no puede usar hooks ni cosas que cambien, es por eso que importamos desde pedido provider y hacemos que encierre todo children 
*   **Joel:**

---

### 4. ¿Qué hace revalidatePath() y en qué momento el usuario ve los datos actualizados?
*   **Paolo:** Revalidatepath borra la cache y manda a nextjs a volver renderizar la pagina, para nosotros y para todos los usuarios finales(en caso puedan verlos), el revalidatepath sirve mas como un funcion de admins, si actualizamos algo y es a nivel de admins solo nosotros podriamos verlo y al instante, si actualizaramos el pedido de un cliente nosotros lo veriamos luego de actualizar los datos, pero los clientes deberia hacer un reloading con una funcion es router refresh, solo volvera a cargar una version actualizada del componente. Es alli cuando vera los datos actualizados
*   **Joel:**

---

### 5. ¿Cuál es la diferencia entre deploying en Vercel y ejecutar npm run start localmente?
*   **Paolo:** En vercel una vez subido, la app que subamos estara en internet, gracias al dominio de vercel, esto es perfecto para enseñarlo/simular como estaria pagando un host, apoyado tambien de railway gracias al env.
Al ejecutarlo local, la app esta viviendo en nuestra pc, solo nosotros tenemos acceso, se ejecuta en un proceso de nodejs, encendido y escucha peticiones continuamente, la memoria es compartida y persistente entre las peticiones mientras no acabemos o reiniciemos el proceso-
*   **Joel:**

---

## 🏆 Pregunta bonus — demostrar en vivo

> "En la URL de producción de Vercel — ¿puedes demostrar que el título de la pestaña en `/mesas` es diferente al de `/comandas`, y que ambos son diferentes al título en `/404`?"

*2 minutos. En la URL de producción real — no en localhost.*
