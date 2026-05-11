## Predicción A
1. layout.tsx va a importar PedidoProvider. ¿layout.tsx necesita "use client" para poder importar un componente que sí tiene "use client"?
¿layout.tsx necesita "use client" para importar PedidoProvider?
    **Paolo** Layout no lo necesito sino romperia la app, el contexto se creara en una archivo aparte con useclient y layout lo importara para luego encerrar a children con ese provider
    **Joel** No es necesario ya que el provider se creara en otro archivo que albergara el useclient. De ese archivo es de donde layout lo extraerá.
## Predicción B
¿Dónde exactamente en PlatoCard.tsx van a agregar la llamada a agregarPlato(plato)? ¿Antes o después del setAgregado(true)?
Línea donde va agregarPlato(plato): 
    **Paolo**en la linea 13 lo creamos y le damos el contexto y luego el boton lo creo en el return
    **Joel** Iria antes de setAgregado(true).
¿El estado local agregado sigue sirviendo? 
    **Paolo** si era necesario hasta el feedback visual, pero luego en adelante usaremos el contexto para mostrar la cantidad de platos en el carritos
    **Joel** si, es necesario para que funcione el feedback visual del click del boton

## Predicción C
¿CarritoPage puede exportar metadata de Next.js? ¿Por qué?
¿metadata funciona en Client Components? 
    **Paolo** No deberia ya que no es una viste en si, sino que es un componente de cliente algo con lo que se va interactuando, a diferencia de el "home", "menu" o "platos" que son las paginas principales
    **Joel** No, por que metadata es una propiedad exclusiva de los componentes Server.
Si no funciona, ¿cómo se cambia el title de la pestaña en una página Client? 
    **Paolo** En el return en html dandole un titulo a la etiqueta head?
    **Joel** La forma recomendada por Next.js es que el archivo page.tsx de esa ruta sea un Server Component (sin "use client"). Este archivo se encargará de exportar la metadata y luego simplemente importará y renderizará tu componente cliente que tiene la lógica del carrito.
## Predicción D
El Server Action recibe los datos del pedido como parámetro. ¿Qué tipo TypeScript le pondrías a ese parámetro?
Tipo del parámetro de enviarComanda: 
    **Paolo** llevaria la interface estadoPedidoContext para cuando enviemos la comanda
    **Joel** El tipo de Typescript que se le pondria es Pedido[].
¿El Server Action puede usar useState? 
    **Paolo** no ya que los hooks solo son para componentes que se renderizan y los server actions son solo funciones logicas
    **Joel** El Server Action no puede usar useState porque es una función asíncrona del lado del servidor, no un componente de React. Los hooks como useState solo funcionan dentro del ciclo de vida de los componentes para manejar la interfaz.
