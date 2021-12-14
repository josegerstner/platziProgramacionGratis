class Billete {
    constructor(valor, cantidad){
        this.valor = valor;
        this.cantidad = cantidad;
    }
}

function entregarDinero() {
    var entregado = [];
    var dinero = parseInt(document.getElementById("dinero").value);
    var div = 0;
    var papeles = 0;
    resultado.innerHTML = "";

    if(dinero > 0){
        for(bi of caja){

            if(dinero > 0){
                div = Math.floor(dinero/bi.valor);

                if(div > bi.cantidad){
                    papeles = bi.cantidad;
                } else {
                    papeles = div;
                }
    
                entregado.push(new Billete(bi.valor, papeles));
                dinero -= (bi.valor * papeles);
            }
        }
    
        if(dinero > 0){
            resultado.innerHTML = "No se puede entregar esa cantidad<br />";
        } else{
            for(e of entregado){
                if(e.cantidad > 0){
                    resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
                    for(c of caja){
                        if(c.valor == e.valor){ 
                            c.cantidad -= e.cantidad;
                        }
                    }
                }
            }
        }
    } else {
        resultado.innerHTML = "El valor ingresado no es válido<br />";
    }
}

var caja = [];

caja.push(new Billete(50, 10));
caja.push(new Billete(20, 15));
caja.push(new Billete(10, 25));

var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);
var resultado = document.getElementById("resultado");
