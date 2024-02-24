//PRODUCTOS
const productos = [
    //Abrigos
    {
        id: "abrigo-01",
        titulo: "Desayuno 01",
        imagen: "./img/abrigos/01.jpg",
        descripcion: [
                      "2 tortitas",
                      "1 cafe",
                      "1 chocolate"
                    ],
        categoria:{
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-02",
        titulo: "Desayuno 02",
        imagen: "./img/abrigos/02.jpg",
        descripcion: [
            "4 tortitas",
            "2 cafe",
            "8 chocolate"
          ],
        categoria:{
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "Desayuno 03",
        imagen: "./img/abrigos/03.jpg",
        descripcion: [
            "2 tortitas",
            "1 cafe",
            "1 chocolate"
          ],
        categoria:{
            nombre: "Abrigos",
            id: "abrigos"
        },
        precio: 1000
    },

    //Camisetas

    {
        id: "camiseta-01",
        titulo: "Bebidas 01",
        imagen: "./img/camisetas/01.jpg",
        descripcion: [
            "2 tortitas",
            "1 cafe",
            "1 chocolate"
          ],
        categoria:{
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-02",
        titulo: "Bebidas 02",
        imagen: "./img/camisetas/02.jpg",
        descripcion: [
            "2 tortitas",
            "1 cafe",
            "1 chocolate"
          ],
        categoria:{
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },
    {
        id: "camiseta-03",
        titulo: "Bebidas 03",
        imagen: "./img/camisetas/03.jpg",
        descripcion: [
            "2 tortitas",
            "1 cafe",
            "1 chocolate"
          ],
        categoria:{
            nombre: "Camisetas",
            id: "camisetas"
        },
        precio: 1000
    },

    //Pantalones

    {
        id: "pantalon-01",
        titulo: "Facturas 01",
        imagen: "./img/pantalones/01.jpg",
        descripcion: [
            "2 tortitas",
            "1 cafe",
            "1 chocolate"
          ],
        categoria:{
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "Facturas 02",
        imagen: "./img/pantalones/02.jpg",
        descripcion: [
            "2 tortitas",
            "1 cafe",
            "1 chocolate"
          ],
        categoria:{
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-03",
        titulo: "Facturas 03",
        imagen: "./img/pantalones/03.jpg",
        descripcion: [
            "2 tortitas",
            "1 cafe",
            "1 chocolate"
          ],
        categoria:{
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesVer = document.querySelectorAll(".producto-ver");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>

                <button class="producto-ver btn" onclick="toggleText('${producto.id}')">Detalles</button>
                <div id="${producto.id}" class="descripcion">
                    ${producto.descripcion.map(parrafo => `<p>${parrafo}</p>`).join('')}
                </div>
            </div>
        `;

        contenedorProductos.append(div);

    })
}

cargarProductos(productos);

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    })
});

function toggleText(id) {
    var descripcion = document.getElementById(id);
    if (descripcion.style.display === "none") {
      descripcion.style.display = "block";
    } else {
      descripcion.style.display = "none";
    }
  }