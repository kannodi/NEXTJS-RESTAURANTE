# 🧠 Reflexión Diaria - Día 3

---

## ⏱ Feedback 30 segundos — Bloque A
**Pregunta:** ¿La predicción A fue correcta? ¿layout.tsx necesitaba "use client" para importar PedidoProvider?

*   **Paolo:** Si, no necesita el useclient ya que romperia la app, importamos el pedidoprovider con normalidad y encerramos children con el provider dandole contexto.
*   **Joel:** No es necesario ya que el provider se creara en otro archivo que albergara el useclient. De ese archivo es de donde layout lo extraerá.

---

## ⏱ Feedback 30 segundos — Bloque B
**Pregunta:** ¿El TODO era más simple de conectar de lo que esperabas, o fue complicado?

*   **Paolo:** Gracias a nextjs nos ahorramos un tanto de codigo en useeffects, es mas simple la estructura con nextjs.
*   **Joel:** Al inicio crei que seria mas complicado que eso, pero la estructura que tiene nextjs hace que sea simple conectarlo.

---

## ⏱ Feedback 30 segundos — Bloque C
**Pregunta:** ¿La predicción sobre metadata fue correcta? ¿Qué implica esa limitación para el diseño de la app?

*   **Paolo:** Ya que es un componente cliente, heredara el header de layout o se podra reescribrir con un useeffect.
*   **Joel:** Si, fue la correcta, metadata solo funciona en componentes server. La implicancia es que debemos estructurar nuestra app de manera que las rutas principales sean Server Components para tener el control del header y que el titulo de la pestaña se muestre correctamente.

---

## ⏱ Feedback 30 segundos — Bloque D
**Pregunta:** ¿La separación entre lo que hace el Server Action y lo que hace el cliente fue clara?

*   **Paolo:** Confuso al inicio ya que no sabia bien lo que seria un server action, ahora lo veo mas claro, que va en cliente y que va en server.
*   **Joel:** *(Pendiente)*

---

## ⏱ Feedback 30 segundos — Bloque E
**Pregunta:** ¿Cuántos errores TypeScript había antes de resolver?
*   **Paolo:** Cuando iniciamos no habian errores hasta llegar a la parte de page carrito, el form que nos indicaba el doc traia un error, ya que se trataba se usar un user server dentro de ya un componente cliente, lo cual rompia la app.
*   **Joel:** *(Pendiente)*

**Pregunta:** ¿El flujo manual encontró algún bug que TypeScript no detectó?
*   **Paolo:** Hasta ahorra no ha pasado un bug que ts no nos haya dicho ya en compilacion
*   **Joel:** *(Pendiente)*

---
