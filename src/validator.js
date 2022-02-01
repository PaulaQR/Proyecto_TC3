
//Aprendimos a trabajar con objetos:
function isValid(numero_tarjeta) {
  let longitud = numero_tarjeta.length;

  let cifra = null;
  let cifra_cad = null;
  let suma = 0;
  // Expresiones regulares en HTML /[^0-9-\s]+/
  // El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.
  let numValid = /[^0-9-\s]+/.test(numero_tarjeta);
  //Condicion para que ingreses solo caracteres de tipo numerico 
  if (numValid === true) {
    return alert("Ingrese solo caracteres de tipo numerico en este campo");
  }
 
  //Invertir numeros 
  numero_tarjeta = numero_tarjeta.split("").reverse().join("")
  //Recorremos el elemento numero_Tarjeta
  for (let i = 1; i < longitud; i += 2) {
    cifra = parseInt(numero_tarjeta.charAt(i)) * 2;
    //parseInt Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.

    //De la operacion anterior escoge los que sean mayores a 9  y los suma
    if (cifra > 9) {
      //El toString() método devuelve una cadena que representa al objeto especificado.
      cifra_cad = cifra.toString();
      cifra = parseInt(cifra_cad.charAt(0)) + parseInt(cifra_cad.charAt(1));
    }
    suma += cifra;
  }
  //sumar digitos y nuevos digitos

  for (let i = 0; i < longitud; i += 2) {
    suma += parseInt(numero_tarjeta.charAt(i));
  }

  //validacion
  if (suma % 10 === 0) {
    console.log(true)
    return true
  } else {
    console.log(false)
    return false
  }
}
//Enmascara los primeros 12 numeros
function maskify(numeroTarjeta) {
  if (numeroTarjeta.length <= 4) {
    return numeroTarjeta;
  }
  //Extraen los ultimos 4 numeros
  let ultimosNumeros = numeroTarjeta.substring(numeroTarjeta.length - 4);
  //Se extraen todos menos los 4 ultimos
  let inicioNumeros = numeroTarjeta.substring(0, numeroTarjeta.length - 4);
  //Se enmascara con #  cualquier caracter
  let numeroEnmascarado = inicioNumeros.replace(/./g, "#") + "" + ultimosNumeros;
  //retorna un objeto
  return numeroEnmascarado;
}

const validator = {
  isValid,
  maskify,
};



export default validator;
