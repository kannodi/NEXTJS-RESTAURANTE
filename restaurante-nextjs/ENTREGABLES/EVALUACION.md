# 🔄 Evaluación entre Pares

---

### 1. ¿Qué hace `notFound()` y cuándo se llama en este proyecto?
*   **Paolo:** 
*   **Joel:** notFound() se encarga de mostrar la vista 404 en caso la mesa no exista. En caso de que esta no se encuntre  en la api, se lanzara este error y se mostrará 404. Esta funcion es llamada cuando la peticion a la api falla o cuando el id de la mesa no existe.

---

### 2. ¿Por qué MesaDetalle usa `useTransition` y no un simple `useState<boolean>` para el loading?
*   **Paolo:** 
*   **Joel:** useTransition evita tener que escribir manualmente setLoading(true) / setLoading(false) con try/catch/finally. Nos da isPending automáticamente mientras la acción corre. Con useState<boolean> necesitarías más código y es fácil olvidar el finally.

---

### 3. ¿`revalidatePath` actualiza la página en tiempo real o al próximo request?
*   **Paolo:** 
*   **Joel:** reavalidatePath es usado para limpiar el cache de una ruta en especifico. Si lo usamos después de hacer un cambio, nextjs lo interpretara como que debe limpiar el cache de esa ruta y regenerarla. No es en tiempo real, pero es casi inmediato.

---

### 4. ¿`generateMetadata` puede fallar (ej: backend caído)? ¿Qué pasa con la página si falla?
*   **Paolo:** 
*   **Joel:** generateMetadata si puede fallar. En nuestro proyecto lo manejamos con try/catch dentro de generateMetadata — si falla, retornamos un metadata por defecto. La página no se cae, solo muestra un título genérico en la pestaña..

---

### 5. ¿Cómo actualizarías el badge del NavBar inmediatamente al cambiar el estado de una mesa sin navegar?
*   **Paolo:** 
*   **Joel:** Para actualizar el badge inmediatamente sin navegar, necesitaríamos un Context o estado global en el cliente (como useMesasContext). revalidatePath solo funciona para el próximo request — no actualiza componentes ya renderizados en pantalla.

---

## 🏆 Pregunta Bonus — Demostración en Vivo
> "Agrega al detalle de la mesa el número de pedido activo (`pedidoActivoId`). Si existe, muéstralo; si es null, muestra un mensaje indicando que no hay pedido activo."
*   **Tiempo:** 5 minutos.
*   **Lugar:** `page.tsx` o `MesaDetalle.tsx`.
