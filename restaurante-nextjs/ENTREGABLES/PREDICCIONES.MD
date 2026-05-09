## Predicción A
1. layout.tsx va a importar PedidoProvider. ¿layout.tsx necesita "use client" para poder importar un componente que sí tiene "use client"?
¿layout.tsx necesita "use client" para importar PedidoProvider?
    **Paolo** Layout no lo necesito sino romperia la app, el contexto se creara en una archivo aparte con useclient y layout lo importara para luego encerrar a children con ese provider
    **Joel** No es necesario ya que el provider se creara en otro archivo que albergara el useclient. De ese archivo es de donde layout lo extraerá.
