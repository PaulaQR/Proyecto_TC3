
//Identificar los caracteres

function validator(numeros){
  let tarjetaValida = numeros.match( /[^0-9-\s]+/)

  if (tarjetaValida) {
  
  } else {
       alert('El numero de tarjeta no es valido')
  }

}


//Funcion para invertir digitos
function invertirDigitos(numero) {
  let invertido = 0;
  let resto = numero;

  do {
    invertido = invertido * 10 + (resto % 10)
    resto = Math.floor(resto / 10)
  } while ( resto > 0 )
  return invertido

}

//Funcion del algoritmo luhn

function ValidarLuhn(numero_tarjeta) {

  let  cadena = numero_tarjeta.toString();
  let longitud = cadena.length;
  let  cifra = null;
  let  cifra_cad= null;
  let  suma=0;

  for (let i=0; i < longitud; i+=2){
    cifra = parseInt(cadena.charAt(i))*2;

    if (cifra > 9){
      cifra_cad = cifra.toString();
      cifra = parseInt(cifra_cad.charAt(0)) +
      parseInt(cifra_cad.charAt(1));
    }
    suma+=cifra;
  }

  for (let  i=1; i < longitud; i+=2){
    suma += parseInt(cadena.charAt(i));
  }


  if ((suma % 10) === 0){
   alert("Número de tarjeta correcto");
  } else {
   alert("El número de tarjeta no es válido");
  }
 }
 




export default validator;
