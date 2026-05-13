// MENÚ
var botonMenu = document.getElementById("botonMenu"); // sirve para seleccionar
var menu = document.getElementById("menu"); 

// addEventListener detecta clicks
botonMenu.addEventListener("click", function(){

    // if comprueba si el menú está abierto
    if(menu.style.display == "block"){
        menu.style.display = "none"; // oculta menú
    }

    else{
        menu.style.display = "block"; // muestra menú
    }
});

// IMÁGENES
var visor = document.getElementById("visor"); // visor de imagen grande
var imagenGrande = document.getElementById("imagenGrande");
var zapatillas = document.querySelectorAll(".zapatilla");
/* querySelectorAll selecciona varias imágenes.
Vi esta forma investigando ejemplos de galerías */

for(var i = 0; i < zapatillas.length; i++){
    zapatillas[i].addEventListener("click", function(){
        visor.style.display = "block"; // muestra visor

        // this.src obtiene la imagen pulsada
        imagenGrande.src = this.src;
    });
}

// al pulsar fuera se cierra el visor
visor.addEventListener("click", function(){
    visor.style.display = "none";
});

// CALCULADORA
var formulario = document.getElementById("formulario");
var resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    // parseInt y parseFloat convierten texto a número
    var precio = parseFloat(document.getElementById("modelo").value);
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var envio = parseFloat(document.getElementById("envio").value);
    var cupon = document.getElementById("cupon").value;

    // validación para evitar negativos o vacío
    if(cantidad <= 0 || isNaN(cantidad)){

        resultado.innerHTML =
        "<p class='error'>Introduce una cantidad válida</p>";
    }

    else{
        var subtotal = precio * cantidad;
        var iva = subtotal * 0.21; // IVA 21%
        var descuento = 0;

        if(cupon.toUpperCase() == "ZC67"){
            descuento = subtotal * 0.15; // descuento 15%
        }

        var total = subtotal + iva + envio - descuento;

        // toFixed(2) muestra 2 decimales
        resultado.innerHTML =
        "<p>Subtotal: " + subtotal.toFixed(2) + "€</p>" +
        "<p>IVA: " + iva.toFixed(2) + "€</p>" +
        "<p>Envío: " + envio.toFixed(2) + "€</p>" +
        "<p>Descuento: -" + descuento.toFixed(2) + "€</p>" +
        "<h3 class='total'>TOTAL: " + total.toFixed(2) + "€</h3>";
    }
});

// REGISTRO
var formRegistro = document.getElementById("formRegistro");
var mensajeRegistro = document.getElementById("mensajeRegistro");

formRegistro.addEventListener("submit", function(event){
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;

    // muestra mensaje personalizado
    mensajeRegistro.innerHTML =
    "<p>Bienvenido " + nombre + "</p>" +
    "<p>Ahora recibirás ofertas especiales. -> Cupón de bienvenida: ZC67(15%)</p>";
});
