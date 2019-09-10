( function() {
  'use strict';

  // Identificamos los elementos a utlizar de nuestro HTML
  var botones = document.querySelectorAll("button");
  var display = document.querySelector("input");

  console.log(botones);

  // Declaramos las variables con las que trabajaremos
  var valor1 = "";
  var valor2 = "";
  var operador = "";

  // Establecemos una señal "flag" para evitar que el punto sea repetido
  var punto = false;


  // Creamos una función para identificar los botones por id cada vez que se les da click
  function obtenerDato(evento) {
    // console.log(evento.target.getAttribute("id")); getAttribute("id") es igual a escribir .id
    console.log(evento.target.id);

    // Del arreglo de botones identifica los números
    if (evento.target.id >= "0" && evento.target.id <= "9"){
      // display.value = display.value + evento.target.id;
      display.value += evento.target.id;
    }

    // Del arreglo de botones identifica y marca el punto
    if (evento.target.id == "." && punto == false) {
      if (display.value == "") {
        display.value = 0 + ".";
        punto = true;
      } else {
        // display.value = display.value + ".";
        display.value += ".";
        punto = true;
      }
    }

    // Del arreglo de botones identifica los operadores
    if (evento.target.id == "+" || evento.target.id == "-" || evento.target.id == "x" || evento.target.id == "/" || evento.target.id == "%") {
      valor1 = display.value;
      operador = evento.target.id;
      display.value = "";
      punto = false;
    }

    // Del arreglo de botones identifica el cambio de signo
    if (evento.target.id == "s" && display.value != "") {
      display.value = parseFloat(display.value)*-1
    }

    // Del arreglo de botones identifica el botón de igual y manda a llamar la función resultado con los valores y el operador para calcular
    if (evento.target.id == "="){
      if(valor1 != "" && display.value != ""){
        valor2 = display.value;
        display.value = resultado(valor1, valor2, operador);
      }
    }

    if (evento.target.id == "ac"){
      display.value = "";
      valor1 = "";
      valor2 = "";
      operador = "";
      punto = false;
    }
  }

  // Declaramos una función para obtener los resultados en base a los valores almacenados y a la operación correspondiente
  function resultado(a, b, operacion){
    if (operacion == "+") {
      return parseFloat(a) + parseFloat(b); // Suma
    } else if (operacion == "-") {
      return parseFloat(a) - parseFloat(b); // Resta
    } else if (operacion == "x") {
      return parseFloat(a) * parseFloat(b); // Multiplicación
    } else if (operacion == "/") {
      return parseFloat(a) / parseFloat(b); // División
    } else if (operacion == "%") {
      return parseFloat(a) * parseFloat(b) / 100; // Porcentaje
    }
  }

  for (var i=0; i<botones.length; i++) {
    botones[i].addEventListener("click", obtenerDato);
  }

})();
