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

    //Bebidas

    {
        id: "bebida-01",
        titulo: "Gaseosas",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Bebidas",
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
        id: "bebida-05",
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

    //Facturas

    {
        id: "factura-01",
        titulo: "Facturas",
        imagen: "",
        descripcion: [
            ""
          ],
        categoria:{
            nombre: "Facturas",
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