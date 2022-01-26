import validator from "./validator.js";
console.log(validator);

//Selectores

const nombreDeUsuario = document.getElementById("nombreDeUsuario").value;
const numeroDeTarjeta = document.getElementById("numeroDeTarjeta");

//Eventos

//Boton que  genera una alerta depende el dato que se ingrese, si es valido o invalido

(() => {
  let botonValidar = document.getElementById("botonValidar");

  botonValidar.addEventListener("click", () => {

    validator.isValid(numeroDeTarjeta.value)

    document.getElementById("contenedorTarjeta").style.display = "none";
    document.getElementById("segundaPantalla").style.display = "block";
  });
  
})()


  const segundaPantalla = document.getElementById('segundaPantalla');

  segundaPantalla.addEventListener('click', _ => {
     // el _ es para indicar la ausencia de parametros
      location.reload(contenedorTarjeta);

  });
  