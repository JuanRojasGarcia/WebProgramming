window.onload = function(){

var coloramarillo = function(){
    this.style.background = "yellow";
}
var colorblanco =function(){
    this.style.background = "white";
}

var operando1 = document.getElementById("operando1")
operando1.addEventListener("focus", coloramarillo)
operando1.addEventListener("focusout", colorblanco)


var operador="";
var numeros=function(){
    var value = this.value;
    console.log(value);
    if (operador==""){
       var valorinput = document.getElementById('operando1').value;
        if(valorinput=="0"){
            document.getElementById("operando1").value="";
        }
        document.getElementById("operando1").value+=valor;
    }else {
        var valorinput = document.getElementById('operando2').value;
        if(valorinput=="0"){
            document.getElementById("operando2").value="";
        }
        document.getElementById("operando2").value+=valor;
    }
}

/*var numeros = function(x){

    var operando1 = document.getElementById("operando1");
    var operando2 = document.getElementById("operando2");
    if (operando1 == "0"){
        document.getElementById("operando1").value = "";
    }
    document.getElementById("operando1").value*=this.value;
    }else {
        if (opernado1 == "0"){
            document.getElementById("operando1").value = "";
        }
        document.getElementById("operando1").value*=this.value;
    }else {
        if (opernado2 == "0"){
            document.getElementById("operando2").value = "";
        }
        document.getElementById("operando2").value*=this.value;
    }

*/

var operadores = function(){
    operador = this.value
}
var resultadoigual = function(){
    oper1=document.getElementById('operando1').value;
    oper2=document.getElementById('operando2').value;
    document.getElementById('resultado').value=eval(oper1+oper2)
}

var reinicio = function(){
    document.getElementById('operando1').value="0";
    document.getElementById('operando2').value="0";
    document.getElementById('resultado').value="0";
    operador = ""
}

var operando1 = document.getElementById("operando1")
    var operando2 = document.getElementById("operando2")
    var uno = document.getElementById("uno")
    var dos = document.getElementById("dos")
    var tres = document.getElementById("tres")
    var cuatro = document.getElementById("cuatro")
    var cinco = document.getElementById("cinco")
    var seis  = document.getElementById("seis")
    var siete = document.getElementById("siete")
    var ocho = document.getElementById("ocho")
    var nueve = document.getElementById("nueve")
    var cero = document.getElementById("cero")
    var suma = document.getElementById("suma")
    var resta = document.getElementById("resta")
    var multiplicacion = document.getElementById("multiplicacion")
    var division = document.getElementById("division")
    var igual = document.getElementById("igual")
    var reiniciar = document.getElementById("reiniciar")

    operando1.addEventListener('focus',coloramarillo)
    operando1.addEventListener('focusout',colorblanco)
    operando2.addEventListener('focus',coloramarillo)
    operando2.addEventListener('focusout',colorblanco)
    resultado.addEventListener('focus',coloramarillo)
    resultado.addEventListener('focusout',colorblanco)
    reiniciar.addEventListener('click',reinicio)


    uno.addEventListener('click',nuemros)
    dos.addEventListener('click',nuemros)
    tres.addEventListener('click',nuemros)
    cuatro.addEventListener('click',nuemros)
    cinco.addEventListener('click',nuemros)
    seis.addEventListener('click',nuemros)
    siete.addEventListener('click',nuemros)
    ocho.addEventListener('click',nuemros)
    nueve.addEventListener('click',nuemros)
    cero.addEventListener('click',nuemros)

    suma.addEventListener('click',operadores)
    resta.addEventListener('click',operadores) 
    multiplicacion.addEventListener('click',operadores)
    division.addEventListener('click',operadores)

    igual.addEventListener('click',resultadoigual) 

}







  


