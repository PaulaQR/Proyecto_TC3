/*
Aprendimos a trabajar con objetos:
Un objeto es una colección de propiedades, 
y una propiedad es una asociación entre un nombre (o clave) y un valor.
El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método.
Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos.
*/

function validator(numero_tarjeta){

  let cadena = this.numero_tarjeta;
  this.longitud = cadena.length; 
  this.cifra = null;
  this.cifra_cad= null;
  this.suma = 0;
  //Aqui aprendimos que son las expresiones regulares e HTML 
  // El método test() ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. Devuelve true o false.
  this.numValid = /[^0-9-\s]+/.test(numero_tarjeta); // regresa un booleano
  this.isvalid = () => {
    if (this.cadena === true) {
      alert("Ingrese solo caracteres de tipo numerico en este campo");
    }
} 

// Busca de manera general del 0 al 9 y si no esta lo elimina 

 cadena = cadena.replace(/\D/g, "");


      //Para invertir numeros vamos a utlizar un for
      for (let i = cadena.length - 1; i >= 0; i--){
        /*
        charAt()
        Los caracteres de una cadena se indexan de izquierda a derecha.
        El índice del primer caracter es 0,
        y el índice del último caracter en una cadena llamada nombreCadena es nombreCadena.length - 1.
        Si el indice que usted proporciona está fuera del rango, JavaScript devuelve una cadena vacía.
        */
        suma +=  cadena.charAt(i);
      }

      //Recorremos el elemento numero_Tarjeta 
      for (let i=0; i < longitud; i+=2){

        //parseInt Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada.
        //escoge numeros de posicion impar 

      cifra = parseInt(cadena.charAt(i))*2;

      //De la operacion anterior escoge los que sean mayores a 9  y los suma 
      if (cifra > 9 ){
        //El toString() método devuelve una cadena que representa al objeto especificado.
        cifra_cad = cifra.toString();
        cifra = parseInt(cifra_cad.charAt(0)) +
        parseInt(cifra_cad.charAt(1));
    } 
    suma+=cifra;
  }
    //sumar digitos y nuevos digitos 

    for (let  i=1; i < longitud; i+=2){
      suma += parseInt(cadena.charAt(i));
    }
  
    //validacion 
    if ((suma % 10) === 0){
     alert("Número de tarjeta correcto");
    } else {
     alert("El número de tarjeta no es válido");
    }
   }


  


export default validator;
