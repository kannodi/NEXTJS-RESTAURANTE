# 🧠 Reflexión Técnica — Día 6

> [!TIP]
> Espacio para documentar aprendizajes, retos superados y análisis técnico durante cada bloque de desarrollo.

---

## ⏱️ Feedback 30 segundos — Bloque A

### ¿La predicción sobre `CarritoPage` fue correcta? ¿Qué implica que Client Components no puedan exportar metadata?
*   **Paolo:** si fue correcta, client components no pueden ya que los metadatos se inyectan obligatoriamente en el servidor, ya que estamos en una page de cliente hacemos uso del hook useeffect para poder modificar el titulo dinamicamente
*   **Joel:** si, fue lo predicho, y respecto a que Client Components no pueden exportar metadata implica que si o si debemos estar en un componente del servidor para poder exportar metadata.

---

## ⏱️ Feedback 30 segundos — Bloque B

### ¿`robots: { index: false }` fue una decisión que esperaban en una app de restaurante? ¿Por qué importa?
*   **Paolo:** Si lo esperaba ya que no todo deberia ser encontrado en el motor del buscador, es mejor solo las secciones importantes de la pagina
*   **Joel:** Fue lo esperado, y es beneficioso para la seguridad de que no se muestren datos sensibles

---

## ⏱️ Feedback 30 segundos — Bloque C

### ¿Encontraron algo inesperado en la auditoría? ¿Qué fue lo más común?
*   **Paolo:** Muchos comentarios que describian partes de funciones y porque existian, aparte de console logs para probar la api en algunas page
*   **Joel:** Lo encontrado fueron varios comentarios y funciones de manejo y captura de errores.

---

## ⏱️ Feedback 30 segundos — Bloque D

### ¿El build tuvo errores? ¿Cuáles y cómo los resolvieron?
*   **Paolo:** No hubieron errores, gracias al documento y a las busquedas de errores en compilacion
*   **Joel:** El build no tuvo errores, compiló correctamente y generó la versión de producción sin necesidad de intervención ni de arreglar nada.


---

## ⏱️ Feedback 30 segundos — Bloque E

### ¿Cuántos errores TypeScript quedaban antes de este bloque? 
*   **Paolo:** Ninguno
*   **Joel:** 

---
*Bitácora de reflexión técnica y aprendizaje continuo.*
