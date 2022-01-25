
//Identificar los caracteres

function validator(numero_tarjeta){

  this.cadena = numero_tarjeta;
  this.longitud = cadena.length; 
  this.cifra = null;
  this.cifra_cad= null;
  this.suma = 0;
  this.numValid = /[^0-9-\s]+/.test(numero_tarjeta); // regresa un booleano
  this.isvalid = () => {
    if (this.cadena === true) {
      alert("Ingrese solo caracteres de tipo numerico en este campo");
    }
} 

// Busca de manera general del 0 al 9 y si no esta lo elimina 
 cadena = cadena.replace(/\D/g, "");


      //Para invertir numeros vamos a utlizar un for
      for (let i = tnumero.length - 1; i >= 0; i--){
        num += tNumero.charAt(i);
      }

      //Recorremos el elemento numero_Tarjeta 
      for (let i=0; i < longitud; i+=2){
        //escoge numeros de posicion impar 
      cifra = parseInt(cadena.charAt(i))*2;

      //De la operacion anterior escoge los que sean mayores a 9  y los suma 
      if (cifra > 9 ){
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
