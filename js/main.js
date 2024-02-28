//PRODUCTOS
const productos = [
    //Promociones
    {
        id: "promocion-01",
        titulo: "Super promo 1",
        imagen: "./img/abrigos/01.jpg",
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
        imagen: "./img/abrigos/01.jpg",
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
        imagen: "./img/abrigos/01.jpg",
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
        imagen: "./img/abrigos/01.jpg",
        descripcion: [
            "Café espresso con una pequeña cantidad de leche"
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
        imagen: "./img/abrigos/02.jpg",
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
        imagen: "./img/abrigos/03.jpg",
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
        imagen: "./img/abrigos/03.jpg",
        descripcion: [
            "Café expreso y leche montada con vapor para darle cremosidad"
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
        imagen: "./img/abrigos/03.jpg",
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
        imagen: "./img/abrigos/03.jpg",
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
        imagen: "./img/camisetas/01.jpg",
        descripcion: [
            "CocaCola (Original | Light | Zero)",
            "Sprite",
            "Fanta"
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
        imagen: "./img/camisetas/02.jpg",
        descripcion: [
            "Sabores: Pomelo, Manzana, Naranja"
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
        imagen: "./img/camisetas/03.jpg",
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
        imagen: "./img/camisetas/03.jpg",
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
        imagen: "./img/camisetas/03.jpg",
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
        imagen: "./img/pantalones/01.jpg",
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
        imagen: "./img/pantalones/02.jpg",
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
        imagen: "./img/pantalones/03.jpg",
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
        imagen: "./img/pantalones/03.jpg",
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
        imagen: "./img/pantalones/03.jpg",
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
        imagen: "./img/pantalones/03.jpg",
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
        imagen: "./img/pantalones/03.jpg",
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
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <div class="producto-etiquetas">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                </div>
                
                <div class="boton-detalles">
                    <button id="miBoton" class="producto-ver btn" onclick="toggleText('${producto.id}')" ontouchend="toggleText('${producto.id}')">Detalles</button>
                
                    <div id="${producto.id}" class="descripcion">
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

/*
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
  
    // Obtiene los valores de usuario y contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Aquí iría la lógica de autenticación, por ejemplo:
    if (username === 'usuario' && password === 'contraseña') {
      alert('¡Inicio de sesión exitoso!');
      // Aquí podrías redirigir a otra página o realizar otras acciones después del inicio de sesión exitoso
    } else {
      document.getElementById('error-message').textContent = 'Usuario o contraseña incorrectos';
    }
});
  
// Obtenemos referencias a los elementos del DOM
const btnMostrarVentana = document.getElementById('mostrarVentana');
const btnCerrarVentana = document.getElementById('cerrarVentana');
const ventanaEmergente = document.getElementById('ventanaEmergente');

// Agregamos un event listener al botón para mostrar la ventana emergente
btnMostrarVentana.addEventListener('click', function() {
  ventanaEmergente.style.display = 'block'; // Mostramos la ventana emergente al hacer clic en el botón
});

// Agregamos un event listener al botón de cerrar para ocultar la ventana emergente
btnCerrarVentana.addEventListener('click', function() {
  ventanaEmergente.style.display = 'none'; // Ocultamos la ventana emergente al hacer clic en el botón de cerrar
});
*/


// Obtener el elemento del botón
var boton = document.getElementById('miBoton');

// Bandera para indicar si se está deslizando
var deslizando = false;

// Manejador de evento para el inicio del deslizamiento
function inicioDeslizamiento() {
    deslizando = true;
    boton.disabled = true; // Desactivar el botón durante el deslizamiento
}

// Manejador de evento para el final del deslizamiento
function finDeslizamiento() {
    deslizando = false;
    boton.disabled = false; // Volver a activar el botón al final del deslizamiento
}

// Manejador de evento para toque en el botón
function toqueEnBoton() {
    if (!deslizando) {
        // Si no se está deslizando, realizar la acción deseada
        console.log('Botón tocado');
    }
}

// Agregar oyentes de eventos
boton.addEventListener('touchstart', inicioDeslizamiento);
boton.addEventListener('touchend', finDeslizamiento);
boton.addEventListener('click', toqueEnBoton);