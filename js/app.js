let agregarCarrito = document.querySelector(
  ".u-full-width.button-primary.input.agregar-carrito"
);

let carrito = document.querySelector(".carrito");

let arrayCarro = [];

agregarCarrito.addEventListener("click", (event) => {
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
  console.log(arrayCarro);
});


