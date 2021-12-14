var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick)

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

// dibujarLinea("pink", 10, 300, 220, 10)
// dibujarLinea("yellow", 300, 10, 10, 220)


// FUNCIONES

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick(){    
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var colorcito = "#FAA";
    var espacio = ancho / lineas;

    for(l = 0; l < lineas; l++){
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, ancho);
        // dibujarLinea(colorcito, yi, 0, 300, xf);
        // dibujarLinea(colorcito, yi, 300, 300, 300-xf);
        // dibujarLinea(colorcito, 0, 300-yi, xf, 0);

    }

    dibujarLinea(colorcito, 1, 1, 1, ancho-1); // línea lateral izq
    dibujarLinea(colorcito, 1, ancho-1, ancho-1, ancho-1); // línea lateral izq

    // dibujarLinea(colorcito, 1, 1, ancho-1, 1); // línea lateral izq
    // dibujarLinea(colorcito, ancho-1, 1, ancho-1, ancho-1); // línea lateral izq
}