import validator from "./validator.js";


//Selectores


let numeroDeTarjeta = document.getElementById("numeroDeTarjeta")

//Eventos primera prueba

//Boton que  genera una alerta depende el dato que se ingrese, si es valido o invalido


  let botonValidar = document.getElementById("botonValidar");

  botonValidar.addEventListener("click", () => {

      //se podria utlizar document.write
   alert(validator.isValid(numeroDeTarjeta.value))

   document.getElementById("contenedorTarjeta").style.display = "none";
  document.getElementById("segundaPantalla").style.display = "block";
  });
    
  
  const segundaPantalla = document.getElementById('segundaPantalla');

  segundaPantalla.addEventListener('click', () => {
     // el _ es para indicar la ausencia de parametros
      location.reload();

  });
  