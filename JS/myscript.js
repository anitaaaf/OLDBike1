
var contador = 0;
const total = 4;
const boton = document.getElementById("Boton");
const respuesta = document.getElementById("respuesta").value;

function limpiar() {
  document.getElementById("respuesta").value = "";
  }

  function vacio() {
    let respuesta = document.getElementById("respuesta").value;
    if (respuesta == "") {
      return true;
    }
    return false;
  }


   
  

  limpiar();

document.getElementById("Boton").onclick = function () {
  contador++;
  var resta = (total - contador);
  var respuesta = document.getElementById("respuesta").value.toLowerCase();

  if (!vacio()) {
  if (respuesta == "bicicleta") {
    alert("La respuesta es correcta - GANASTE!");
  } else {
    if (contador == 1) {
      window.alert ("INCORRECTO - intenta de nuevo! \n Te quedan 3 intentos");
     limpiar();
      return false;
    }else if (contador == 2) {
      alert ("INCORRECTO - Pista: Tiene dos ruedas \n Te quedan 2 intentos");
      limpiar();
      return false;
    }else if (contador == 3) {
      alert("INCORRECTO - Pista: La usan niños y adultos \n Te queda 1 intento");
      limpiar();
      return false;
    }else if (contador == 4) {
      alert("PERDISTE \nEl resultado es BICICLETA");
      return false;
     
    }
  }
  }

  
  document.getElementById("mostrar").innerHTML = contador;
  document.getElementById("restar").innerHTML = resta;
  event.preventDefault();

  }








  
