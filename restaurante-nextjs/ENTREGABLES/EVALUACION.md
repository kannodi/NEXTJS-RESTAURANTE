# 🔄 Evaluación entre Pares

---

### 1. ¿Qué hace `notFound()` y cuándo se llama en este proyecto?
*   **Paolo:** Se posiciona como page y muestra la pagina 404, cuando la ruta no existe, con el redireccion a las mesas
*   **Joel:** 

---

### 2. ¿Por qué MesaDetalle usa `useTransition` y no un simple `useState<boolean>` para el loading?
*   **Paolo:** Con usetransition es mas simplificado, esperara ya que este client component esta encerrado en un fallback suspense, cuando se haga el await de la funcion este cargara el skeleton 
*   **Joel:** 

---

### 3. ¿`revalidatePath` actualiza la página en tiempo real o al próximo request?
*   **Paolo:** Primero borra la cache de las rutas declaradas y luego hace una peticion a nextjs para actualizar con los nuevos datos
*   **Joel:** 

---

### 4. ¿`generateMetadata` puede fallar (ej: backend caído)? ¿Qué pasa con la página si falla?
*   **Paolo:** En el generatemetada tenemos un control de errores, si falla en la pestaña se vera el tipo de error acompañado de la pag de error
*   **Joel:** 

---

### 5. ¿Cómo actualizarías el badge del NavBar inmediatamente al cambiar el estado de una mesa sin navegar?
*   **Paolo:** tendria que estar el contexto de la mesa en el nav, luego pedir el estado de la mesa y llamarlo con etiquetas html, segun haya o no mesa mostramos lo que queremos
*   **Joel:** 

---

## 🏆 Pregunta Bonus — Demostración en Vivo
> "Agrega al detalle de la mesa el número de pedido activo (`pedidoActivoId`). Si existe, muéstralo; si es null, muestra un mensaje indicando que no hay pedido activo."
*   **Tiempo:** 5 minutos.
*   **Lugar:** `page.tsx` o `MesaDetalle.tsx`.
