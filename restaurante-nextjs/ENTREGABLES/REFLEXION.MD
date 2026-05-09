## ⏱  Feedback 30 segundos — Bloque A
• ¿La predicción A fue correcta? ¿layout.tsx necesitaba "use client" para importar PedidoProvider?
    **Paolo** Si, no necesita el useclient ya que romperia la app, importamos el pedidoprovider con normalidad y encerramos children con el provider dandole contexto
    **Joel** No es necesario ya que el provider se creara en otro archivo que albergara el useclient. De ese archivo es de donde layout lo extraerá.
## ⏱  Feedback 30 segundos — Bloque B
• ¿El TODO era más simple de conectar de lo que esperabas, o fue complicado?
    **Paolo**Gracias a nextjs nos ahorramos un tanto de codigo en useeffects, es mas simple la estructura con nextjs
    **Joel**
