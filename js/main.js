//PRODUCTOS
const productos = [
    //Promociones
    {
        id: "promocion-01",
        titulo: "Super promo 1",
        imagen: "",
        descripcion: [
                      "Café con leche, Té o chocolate + Jugo natural + Soda + 2 Facturas o Raspaditas"
                    ],
        categoria:{
            nombre: "Promos",
            id: "promociones"
        },
        precio: 1800
    },
    {
        id: "promocion-02",
        titulo: "Super promo 2",
        imagen: "",
        descripcion: [
                      "Café con leche, Té o Chocolate + Soda + Porción de Macedonia"
                    ],
        categoria:{
            nombre: "Promos",
            id: "promociones"
        },
        precio: 3700
    },
    {
        id: "promocion-03",
        titulo: "Super promo 3",
        imagen: "",
        descripcion: [
                      "Café con leche, Té o Chocolate + Soda + Tostados de Jamón y queso o primavera"
                    ],
        categoria:{
            nombre: "Promos",
            id: "promociones"
        },
        precio: 3700
    },
    

    //Café
    {
        id: "cafe-01",
        titulo: "Café pocillo/cortado",
        imagen: "",
        descripcion: [
            ""
            ],
        categoria:{
            nombre: "Cafeteria",
            id: "cafe"
        },
        precio: 900
    },
    {
        id: "cafe-02",
        titulo: "Café jarrijo/cortado",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Cafeteria",
            id: "cafe"
        },
        precio: 1100
    },
    {
        id: "cafe-03",
        titulo: "Café doble/con leche",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Cafeteria",
            id: "cafe"
        },
        precio: 1500
    },
    {
        id: "cafe-04",
        titulo: "Capuchino",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Cafeteria",
            id: "cafe"
        },
        precio: 1700
    },
    {
        id: "cafe-05",
        titulo: "Submarino",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Cafeteria",
            id: "cafe"
        },
        precio: 1700
    },
    {
        id: "cafe-06",
        titulo: "Café Helado",
        imagen: "",
        descripcion: [
            ""
            ],
        categoria:{
            nombre: "Cafeteria",
            id: "cafe"
        },
        precio: 0
    },
    {
        id: "cafe-07",
        titulo: "Café Irlandes",
        imagen: "",
        descripcion: [
            ""
            ],
        categoria:{
            nombre: "Cafeteria",
            id: "cafe"
        },
        precio: 0
    },
    {
        id: "cafe-08",
        titulo: "Café Baileys",
        imagen: "",
        descripcion: [
            ""
            ],
        categoria:{
            nombre: "Cafeteria",
            id: "cafe"
        },
        precio: 0
    },
    {
        id: "cafe-09",
        titulo: "Caramel Macchiato",
        imagen: "",
        descripcion: [
            ""
            ],
        categoria:{
            nombre: "Cafeteria",
            id: "cafe"
        },
        precio: 0
    },
    {
        id: "cafe-10",
        titulo: "Frappé",
        imagen: "",
        descripcion: [
            ""
            ],
        categoria:{
            nombre: "Cafeteria",
            id: "cafe"
        },
        precio: 0
    },
    {
        id: "cafe-11",
        titulo: "Mocca",
        imagen: "",
        descripcion: [
            ""
            ],
        categoria:{
            nombre: "Cafeteria",
            id: "cafe"
        },
        precio: 0
    },
    {
        id: "cafe-12",
        titulo: "Té distintas variedades",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Cafeteria",
            id: "cafe"
        },
        precio: 750
    },

    //Bebidas y Licuados

    {
        id: "bebida-01",
        titulo: "Gaseosas",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Bebidas | Licuados",
            id: "bebidas"
        },
        precio: 1500
    },
    {
        id: "bebida-02",
        titulo: "Aguas saborizadas",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Bebidas",
            id: "bebidas"
        },
        precio: 1000
    },
    {
        id: "bebida-03",
        titulo: "Agua con o sin gas",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Bebidas",
            id: "bebidas"
        },
        precio: 800
    },
    {
        id: "bebida-04",
        titulo: "Jugo de naranja de 330cc",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Bebidas",
            id: "bebidas"
        },
        precio: 2400
    },
    {
        id: "bebida-05",
        titulo: "Licor Tía María",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Bebidas",
            id: "bebidas"
        },
        precio: 0
    },
    {
        id: "bebida-06",
        titulo: "Licuados de 330cc",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Bebidas",
            id: "bebidas"
        },
        precio: 2300
    },
    {
        id: "bebida-07",
        titulo: "Licuado de Chocolate",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Licuados",
            id: "bebidas"
        },
        precio: 0
    },
    

    //Facturas

    {
        id: "factura-01",
        titulo: "Facturas",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Masas Finas",
            id: "facturas"
        },
        precio: 400
    },
    {
        id: "factura-02",
        titulo: "Raspaditas",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Facturas",
            id: "facturas"
        },
        precio: 270
    },
    {
        id: "factura-03",
        titulo: "Tostados",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Facturas",
            id: "facturas"
        },
        precio: 2700
    },
    {
        id: "factura-04",
        titulo: "Tostadas x3",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Facturas",
            id: "facturas"
        },
        precio: 200
    },
    {
        id: "factura-05",
        titulo: "Untables x2",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Facturas",
            id: "facturas"
        },
        precio: 540
    },
    {
        id: "factura-06",
        titulo: "Media luna con Jamón y queso",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Facturas",
            id: "facturas"
        },
        precio: 1400
    },
    {
        id: "factura-07",
        titulo: "Criollo con jámon y queso",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Facturas",
            id: "facturas"
        },
        precio: 1200
    },
    {
        id: "factura-08",
        titulo: "Masas Secas",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Facturas",
            id: "facturas"
        },
        precio: 1200
    },
    {
        id: "factura-09",
        titulo: "Masas Finas",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Facturas",
            id: "facturas"
        },
        precio: 1200
    },

    //Tortas y Tartas

    {
        id: "tortas-01",
        titulo: "Macedonia",
        imagen: "./img/Tortas/torta-01.jpg",
        descripcion: [
            "Limón, Frutas, Tiramisu"
          ],
        categoria:{
            nombre: "Tortas | Tartas",
            id: "tortas"
        },
        precio: 0
    },
    {
        id: "tortas-02",
        titulo: "Chocotorta",
        imagen: "./img/Tortas/torta-01.jpg",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Tortas",
            id: "tortas"
        },
        precio: 0
    },
    {
        id: "tortas-03",
        titulo: "Selva Negra",
        imagen: "./img/Tortas/torta-01.jpg",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Tortas",
            id: "tortas"
        },
        precio: 0
    },

    //Tartas

    {
        id: "tortas-04",
        titulo: "Lemon Pie",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Tartas",
            id: "tortas"
        },
        precio: 0
    },
    {
        id: "tortas-05",
        titulo: "Cabsha",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Tartas",
            id: "tortas"
        },
        precio: 0
    },
    {
        id: "tortas-06",
        titulo: "Apolos",
        imagen: "",
        descripcion: [
            "Lleva frutas y crema chantillí"
          ],
        categoria:{
            nombre: "Tartas",
            id: "tortas"
        },
        precio: 0
    },
    {
        id: "tortas-07",
        titulo: "Bombones",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Tartas",
            id: "tortas"
        },
        precio: 0
    },
    {
        id: "tortas-08",
        titulo: "Merengues",
        imagen: "",
        descripcion: [
            "Con dulce de leche o crema"
          ],
        categoria:{
            nombre: "Tartas",
            id: "tortas"
        },
        precio: 0
    },
    {
        id: "tortas-09",
        titulo: "Tortas Tradicionales",
        imagen: "",
        descripcion: [
            "Con Dulce de leche y crema chantilli"
          ],
        categoria:{
            nombre: "Tartas",
            id: "tortas"
        },
        precio: 0
    },
    {
        id: "tortas-10",
        titulo: "Adornos de Tortas",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Tartas",
            id: "tortas"
        },
        precio: 0
    },

    //Pizzas | Empanadas | Sanguchitos

    {
        id: "salados-01",
        titulo: "Pizza Margarita",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Delicias Casuales",
            id: "salados"
        },
        precio: 0
    },

    //Empanadas

    {
        id: "salados-02",
        titulo: "Epanadas de Vigilia",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Delicias Casuales",
            id: "salados"
        },
        precio: 0
    },
    {
        id: "salados-03",
        titulo: "Epanadas de Bacalao",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Delicias Casuales",
            id: "salados"
        },
        precio: 0
    },

    //Sanguches

    {
        id: "salados-04",
        titulo: "Sanguchitos",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Delicias Casuales",
            id: "salados"
        },
        precio: 0
    },
];
console.log("Productos:",productos.length);

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
            ${producto.imagen[0] !== "" ? `<img class="producto-imagen" src="${producto.imagen}">` : ""}

            <div class="producto-detalles">

                <div class="producto-etiquetas">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                </div>
                
                <div class="boton-detalles">
                    ${producto.descripcion[0] !== "" ? `<button id="${producto.id}-btn" class="producto-ver btn" onclick="toggleText('${producto.id}')" ontouchend="toggleText('${producto.id}')">Detalles</button>` : ""}
                
                    <div id="${producto.id}" class="descripcion" style="${producto.descripcion[0] === "" ? 'display: none;' : ''}">
                        ${producto.descripcion.map(parrafo => `<p>${parrafo}</p>`).join('')}
                    </div>
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

    if (descripcion.style.display === "none" || descripcion.style.display === "") {
      descripcion.style.display = "block";
    } else {
      descripcion.style.display = "none";
    }
}