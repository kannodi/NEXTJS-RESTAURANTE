# 🧠 Reflexión Técnica — Día 4 & 5

> [!TIP]
> Espacio para documentar el aprendizaje y la resolución de problemas durante los bloques de desarrollo.

---

### ⏱ Feedback 30 segundos — Bloque A
**¿El backend tiene filtro por estado o hay que filtrar en el frontend?**

*   **Paolo:** El backend que creamos con antigravity para que se integre con nuestro frontend, no tiene ese filtro en su codigo, por lo que tendremos que filtrarlo en el frontend con filter.
*   **Joel:** El filtro se hace en el frontend.

---

### ⏱ Feedback 30 segundos — Bloque B
**¿La predicción sobre `generateMetadata` síncrona fue correcta?**

*   **Paolo:** Si, ya que lista de comandas para los admins sera una page estatica, no necesitamos algun async/await, solo mostrar el "comandas | restaurante"
*   **Joel:** Si, fue la correcta, no necesitaba async ya que solo muestra la lista de pedidos.

---

### ⏱ Feedback 30 segundos — Bloque C
**¿La tabla de flujo de estados fue clara antes de escribir SIGUIENTE?**

*   **Paolo:** Se me complico un poco entenderlo pero luego se aclara, el crear un objeto para luego declararlo con una linea de tren donde solo se puede ir para adelante
*   **Joel:** Si, ya que no se puede pasar de lista a pendiente, ni de cancelada a pendiente, etc. Y el boton "SIGUIENTE" solo aparecera si es que se puede pasar de estado.

---

### ⏱ Feedback 30 segundos — Bloque D
**¿La lista se actualizó automáticamente o necesitaron `router.refresh()`?**

*   **Paolo:**  Se actualizo automaticamente gracias a revalidatepath, borra la cache y vuelve a traer los datos actualizados EN EL SERVIDOR, router refresh esta dirigido para el usuario no administrador, para que vea cambios en el front sin recargar
*   **Joel:** 

---

### ⏱ Feedback 30 segundos — Bloque E
**¿Cuántos errores TypeScript había?**

*   **Paolo:** 
*   **Joel:** 

