let agregarCarrito = document.querySelectorAll(
  ".u-full-width.button-primary.input.agregar-carrito"
);
let vaciarCarrito = document.querySelector("#vaciar-carrito");

let carrito = document.querySelector("#img-carrito");

let arrayCarro = [];
let contador = 0;

for (let i = 0; i < agregarCarrito.length; i++) {
  let agregarCarritoProducto = agregarCarrito[i];

  agregarCarritoProducto.addEventListener("click", (event) => {
    event.preventDefault();

    // Obtenemos el data-id del botón que fue clicado
    let productoID = event.currentTarget.getAttribute("data-id");

    //Se almacena un array de todos los productos de la clase card
    let productos = document.querySelectorAll(".card");

    //Recorremos los productos
    for (let i = 0; i < productos.length; i++) {
      let producto = productos[i];

      // Obtenemos el data-id del boton "Agregar Al Carrito" dentro de este producto
      productoIdActual = producto
        .querySelector(".u-full-width.button-primary.input.agregar-carrito")
        .getAttribute("data-id");

      //Si el data-id del producto seleccionado es igual al actual
      if (productoIdActual === productoID) {
        arrayCarro.push(producto); //Se añade al array
      }
    }
  });
}

carrito.addEventListener("mouseenter", (event) => {
  event.preventDefault();

  //Tomamos la tabla del carrito
  let tablaCarro = document.querySelector("#lista-carrito");
  //Tomamos el body de la tabla del carrito

  let tbody = tablaCarro.querySelector("tbody");

  // Limpiamos el contenido actual del tbody
  tbody.innerHTML = "";

  //Iteramos sobre el array creado anteriormente y que contendra los productos seleccionados
  for (let i = 0; i < arrayCarro.length; i++) {
    let producto = arrayCarro[i];

    //Creamos un elemento img
    let img = document.createElement("img");
    //Creamos un elemento celda para la imagen
    let celdaImg = document.createElement("td");
    //Tomamos el src de la imagen y se la asinamos al elemento img creado anteriormente
    img.src = producto.querySelector(".imagen-curso.u-full-width").src;
    img.className = producto.querySelector(".imagen-curso.u-full-width"); //Toma la etiqueta img del producto
    celdaImg.appendChild(img); // Añadir la imagen a la celda

    let nombre = producto.querySelector("h4").innerText; //Toma el texto que contiene el titulo del producto
    let precio = producto.querySelector(".precio").innerText; //Toma el precio del producto
    let cantidad = 1;

    //Creamos un elemento boton
    let deleteProduct = document.createElement("button");
    deleteProduct.className = "borrar-curso"; //Le asociamos la clase
    deleteProduct.textContent = "X";

    //Creamos un elemento fila
    let fila = document.createElement("tr");

    //Creamos un elemento celda del nombre
    let celdaNombre = document.createElement("td");
    celdaNombre.innerText = nombre; //Añadimos el nombre del producto a la celda

    //Creamos un elemento celda para el precio
    let celdaPrecio = document.createElement("td");
    celdaPrecio.innerText = precio; //Añadimos el valor del precio a la celda

    //Creamos un elemento celda para la cantidad
    let celdaCantidad = document.createElement("td");
    celdaCantidad.innerText = cantidad; //Añadimos el valor de la cantidad a la celda

    let celdaRemove = document.createElement("td");
    celdaRemove.appendChild(deleteProduct);

    deleteProduct.addEventListener("click", () => {
      //Encontramos el indice del producto en el array
      let posicion = arrayCarro.indexOf(producto);
      // Elimina el producto del array
      arrayCarro.splice(posicion, 1);
      tbody.removeChild(fila); // Elimina la fila del carrito

      console.log(arrayCarro);
    });

    //Añadimos las celdas al elemento fila
    fila.appendChild(celdaImg);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaPrecio);
    fila.appendChild(celdaCantidad);
    fila.appendChild(celdaRemove);

    //Añadimos la fila al cuerpo de la tabla
    tbody.appendChild(fila);
  }
});

vaciarCarrito.addEventListener("click", (event) => {
  event.preventDefault();
  arrayCarro = [];

  //Tomamos la tabla del carrito
  let tablaCarro = document.querySelector("#lista-carrito");
  let tbody = tablaCarro.querySelector("tbody");

  if (tbody) {
    // Limpiamos el contenido del tbody
    tbody.innerHTML = "";
  }
});
