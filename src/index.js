import validator from "./validator.js";
console.log(validator);

//Selectores

const nombreDeUsuario = document.getElementById("nombreDeUsuario").value;
const numeroDeTarjeta = document.getElementById("numeroDeTarjeta").value;

//Eventos

//Boton que  genera una alerta depende el dato que se ingrese, si es valido o invalido



(() => {
  let botonValidar = document.getElementById("botonValidar");

  botonValidar.addEventListener("click", () => {

    document.getElementById("contenedorTarjeta").style.display = "none";

    document.getElementById("segundaPantalla").style.display = "block";
  });
  
})()


