import validator from "./validator.js";


//Selectores

//Manipulacion del DOM, para enmascarar el numero de tarjeta
const numeroTarjetaEnmascarar = () => {
  console.log(numeroTarjetaEnmascarar)
  let numero = document.getElementById("numero").value;
  let numeroDeTarjeta = new validador(numero);
  document.getElementById('numeroDeTarjeta').value = numeroDeTarjeta.maskify().ultimosNumeros;
  document.getElementById('numero').value = numeroDeTarjeta.maskify().inicioNumeros;
}

//Funcion para manipular los display de la segundaPantalla
const segundaPantalla = () => {
  let segundaPantalla = document.getElementById("segundaPantalla");
  segundaPantalla.style.display = "none";
  document.getElementById("contenedorTarjeta")
  contenedorTarjeta.style.display = "block";

  //Se limpian los inputs
  document.getElementById('numeroDeTarjeta').value = "";
  document.getElementById('numero').value = "";
  document.getElementById("nombreDeUsuario").value = "";
  document.getElementById("mensaje").value = "";
}

//Funcion para manipular los display  de la pantallaPrincipal
const pantallaPrincipal = () => {
  //crea la tarjeta y  valida 
  let numero = document.getElementById("numero").value
  let numeroDeTarjeta = new validador(numero);

  //verifica si  obtiene inputs vacios 
  if(document.getElementById("numero").value == "" || document.getElementById('nombreDeUsuario').value == ""){
    return alert ("llena todos los campos");
  }
  else{
    if(numeroDeTarjeta.isValid().answer === undefined){
      segundaPantalla();
    }
    //Si estan  completos los campos se realizan las funciones 
    else {
      //la pantalla inicial se esconde
      let segundaPantalla = document.getElementById("segundaPantalla");
      segundaPantalla.style.display = "block";
      document.getElementById("contenedorTarjeta")
      contenedorTarjeta.style.display = "none";
      //Se muestra el nombre que se escribio en el input previo
      let usuario = document.getElementById('nombreDeUsuario').value
      document.getElementById('mensaje').innerHTML = usuario;
      //Se muestra los ultimos numeros de la tarjeta de credito ingresada
      document.getElementById('numeroEnmascarado').innerHTML = numeroDeTarjeta.maskify().longitudSegundaPantalla;
      //Se muestra si es valido o invalido del numero de tarjeta
      document.getElementById('validacion').innerHTML = numeroDeTarjeta.isValid().answer;
    }
  }
}

//Funcionalidad del boton "validar"
let botonValidar = document.getElementById('botonValidar');
botonValidar.addEventListener("click", pantallaPrincipal);

// Funcionalidad del boton "validar otra tarjeta"
let botonOtro = document.getElementById("click", segundaPantalla);
botonOtro.addEventListener("click",segundaPantalla);
// Evento que permite el funcionamiento del maskify al oprimir cada numero

let numeroDeTarjeta = document.getElementById('numeroDeTarjeta');
numero.addEventListener("keyup", numeroTarjetaEnmascarar)




//Eventos primera prueba

//Boton que  genera una alerta depende el dato que se ingrese, si es valido o invalido
/*

  let botonValidar = document.getElementById("botonValidar");

  botonValidar.addEventListener("click", () => {

   validator.isValid(numeroDeTarjeta.value)
    
   
  });

  /*
  const segundaPantalla = document.getElementById('segundaPantalla');

  segundaPantalla.addEventListener('click', () => {
     // el _ es para indicar la ausencia de parametros
      location.reload();

  });
  */