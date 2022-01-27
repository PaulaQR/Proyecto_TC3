/*
Aprendimos a trabajar con objetos:
Un objeto es una colección de propiedades, 
y una propiedad es una asociación entre un nombre (o clave) y un valor.
El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método.
*/
function isValid(numero_tarjeta) {
  let longitud = numero_tarjeta.length;
  let cifra = null;
  let cifra_cad = null;
  let suma = 0;
  //Aqui aprendimos que son las expresiones regulares e HTML
  // El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.
  //let valid = false;
  let numValid = /[^0-9-\s]+/.test(numero_tarjeta);

  if (numValid === true) {
    return alert("Ingrese solo caracteres de tipo numerico en este campo");
  }

  // Busca de manera general del 0 al 9 y si no esta lo elimina
 // numero_tarjeta = numero_tarjeta.replace(/\D/g, "");
 //cambiar
  numero_tarjeta = numero_tarjeta.split("").reverse().join("")
  console.log(numero_tarjeta)
  //Para invertir numeros vamos a utlizar un for
  /*
        charAt()
        --Elimina el ultimo digito 
        y el índice del último caracter en una cadena llamada nombreCadena es nombreCadena.length - 1.
        Si el indice que usted proporciona está fuera del rango, JavaScript devuelve una cadena vacía.
        */

  //Recorremos el elemento numero_Tarjeta
  for (let i = 1; i < longitud; i += 2) {
    cifra = parseInt(numero_tarjeta.charAt(i)) * 2;
    //parseInt Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.
    //escoge numeros de posicion impar

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

function maskify(numero_tarjeta) {
  //Extraen los ultimos tres numeros
  let ultimosNumeros = numero_tarjeta.substring(numero_tarjeta.length - 4);
  //Se estraen todos menos los 3 ultimos
  let inicioNumeros = numero_tarjeta.substring(0, numero_tarjeta.length - 4);
  //Se enmascara con #  cualquier caracter
  let numerosSegundaPantalla =
    inicioNumeros.replace(/./g, "#") + " " + ultimosNumeros;
  //retorna un objeto
  return { ultimosNumeros, inicioNumeros, numerosSegundaPantalla };
}

const validator = {
  isValid,
  maskify,
};
export default validator;
