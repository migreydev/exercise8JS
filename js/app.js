let agregarCarrito = document.querySelector(
  ".u-full-width.button-primary.input.agregar-carrito"
);

let carrito = document.querySelector("#carrito");

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
});

carrito.addEventListener("click", (event) => {
  event.preventDefault();

  for (let i = 0; i < arrayCarro.length; i++) {
    let producto = arrayCarro[i];

    let img = producto.querySelector("img");
    let nombre = producto.querySelector("h4").innerText;
    let precio = producto.querySelector(".precio").innerText;

    let tablaCarro = document.querySelector("#lista-carrito");

    let tbody = tablaCarro.querySelector("tbody");

    let fila = document.createElement("tr");

    let celdaImg = document.createElement("td");
    celdaImg.appendChild(img);

    let celdaNombre = document.createElement("td");
    celdaNombre.innerText = nombre;

    let celdaPrecio = document.createElement("td");
    celdaPrecio.innerText = precio;

    fila.appendChild(celdaImg);
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaPrecio);

    tbody.appendChild(fila);
  }
});
