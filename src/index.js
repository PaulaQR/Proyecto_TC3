import validator from "./validator.js";
//Selectores
let numeroDeTarjeta = document.getElementById("numeroDeTarjeta")
let nombreDeUsuario = document.getElementById("nombreDeUsuario")
//Eventos primera prueba
//Boton que  genera una alerta depende el dato que se ingrese, si es valido o invalido
let botonValidar = document.getElementById("botonValidar");

  botonValidar.addEventListener("click", () => {
    let numeroFinal = numeroDeTarjeta.value
    if(numeroFinal.length !== 16){
      return alert("La tarjeta tiene que tener 16 numeros");
    }
    document.getElementById("ultimos-cuatro").innerHTML = validator.maskify(numeroFinal);
   let isValid = validator.isValid(numeroFinal)

    //Condicion si es valida o invalida 
   if (isValid){
     document.getElementById("estado-validez").innerHTML = "ES VALIDA";
     
    } else {
      document.getElementById("estado-validez").innerHTML = "ES INVALIDA";
      
    }
    //Nos muestra el nombre de usuario. 
    document.getElementById("nombre-usuario-final").innerHTML = nombreDeUsuario.value;
   
  //bloqueo de segunda pantalla hasta que no se cumpla con los campos requeridos.    
  document.getElementById("contenedorTarjeta").style.display = "none";
  document.getElementById("segundaPantalla").style.display = "block";
  });
    
  //Recarga a la primera pantalla
  const segundaPantalla = document.getElementById('segundaPantalla');

  segundaPantalla.addEventListener('click', () => {
     // el _ es para indicar la ausencia de parametros
      location.reload();

  });
  