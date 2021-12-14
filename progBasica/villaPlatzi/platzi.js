document.addEventListener("keyup", moverPollo);
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var cantidadVacas = aleatorio(0, 25);
var cantidadCerdos = aleatorio(0, 30);
// var cantidadPollos = aleatorio(0, 40);
var cantidadPollos = 1;
var ANCHO = 60;

var xPollo = 150;
var yPollo = 150;

xPollo = aleatorio(0, 8) * ANCHO;
yPollo = aleatorio(0, 8) * ANCHO;

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var fondo = {
    url: "tile.png",
    cargaOk: false
}
var vaca = {
    url: "vaca.png",
    cargaOk: false
}
var cerdo = {
    url: "cerdo.png",
    cargaOk: false
}
var pollo = {
    url: "pollo.png",
    cargaOk: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas(){
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdos(){
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollos(){
    pollo.cargaOk = true;
    dibujar();
}

function dibujar(){
    if(fondo.cargaOk){
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if(vaca.cargaOk){
        for(var v=0; v<cantidadVacas; v++){
            var xVacas = aleatorio(0, 8) * ANCHO;
            var yVacas = aleatorio(0, 8) * ANCHO;
            papel.drawImage(vaca.imagen, xVacas, yVacas);
        }
    }

    if(cerdo.cargaOk){
        for(var c=0; c<cantidadCerdos; c++){
            var x = aleatorio(0, 8) * ANCHO;
            var y = aleatorio(0, 8) * ANCHO;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }

    if(pollo.cargaOk){
        for(var p=0; p<cantidadPollos; p++){
            papel.drawImage(pollo.imagen, xPollo, yPollo);
            moverPollo(xPollo, yPollo, papel);
        }
    }
}


function aleatorio(min, max){
    var resultado;
    resultado = Math.floor(Math.random() * (max - min)) + min;
    return resultado;
}

function moverPollo(evento){
    // var colorcito = "blue";
    var movimiento = ANCHO;
    switch(evento.keyCode){
        case teclas.UP:
            yPollo -= movimiento;
            dibujar();
            break;
        case teclas.DOWN:
            yPollo += movimiento;
            dibujar();
            break;
        case teclas.LEFT:
            xPollo -= movimiento;
            dibujar();
            break;
        case teclas.RIGHT:
            xPollo += movimiento;
            dibujar();
            break;
        default:
            console.log("Otra tecla");
            break;
    }
}