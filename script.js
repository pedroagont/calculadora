'use strict';

(function() {

    var botones = document.querySelectorAll("button");
    var display = document.querySelector("input");

    var valor1 = "";
    var valor2 = "";

    var operacion = "";

    var punto_creado = false;

    console.log(botones);

    function suma(a,b){
      return parseInt(a) + parseInt(b) ;
    }

    function resta(a,b){
      return parseInt(a) - parseInt(b) ;
    }

    function multiplicacion(a,b){
      return parseInt(a) * parseInt(b) ;
    }

    function division(a,b){
      return parseInt(a) / parseInt(b) ;
    }

    function porcentaje(a,b){
      return parseInt(a) % parseInt(b) ;
    }

    function obtenerDato(evento) {
      console.log(evento.target.id);

      if(evento.target.id >= "0" && evento.target.id <= "9") {
        display.value = display.value + evento.target.id;
      }

      if(evento.target.id == "+" || evento.target.id == "-" || evento.target.id == "x" || evento.target.id == "/" || evento.target.id == "%" ) {
        punto_creado = false;
        valor1 = display.value;
        operacion = evento.target.id;
        display.value = "";
      }

      if(evento.target.id == "=") {
        if(valor1 != "" && display.value != "") {
          valor2 = display.value;
          display.value = suma(valor1, valor2);
        }
      }

      if(evento.target.id == "." && punto_creado == false) {
        display.value = display.value + ".";
        punto_creado = true;
      }

      if(evento.target.id == "ac") {
        display.value = "";
        valor1 = "";
        valor2 = "";
        operacion = "";
        punto_creado = true;
      }

      if(evento.target.id == "s") {
        display.value = display.value * -1;
      }

    }

    for(var i=0; i<botones.length; i++) {
      botones[i].addEventListener("click", obtenerDato);
    }


})(); //iife
