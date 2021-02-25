/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
  let numero;
  let acumPos = 0;
  let acumNeg = 1; //pq si lo inicializo en 0 y desp tengo q multipl. me  va a dar 0
  let seguir;
  let flag = 0;
  do {
    numero = parseInt(prompt("Ingrese un numero: "));

    while (isNaN(numero)) {
      numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
    }

    if (numero > 0) {
      acumPos = acumPos + numero;
    
    }
     else {
     
      acumNeg = acumNeg * numero;
      flag = 1;
    }

    seguir = prompt("Quiere continuar? s/n");
  } while (seguir == "s");

  if(flag == 0){
    acumNeg = 0;
  }


  document.getElementById("txtIdSuma").value = acumPos;
  document.getElementById("txtIdProducto").value = acumNeg;
} 

// CLASE 10 TERMINA 1:48 ESTE EJERCICIO Y EMPIEZA A EXPLICAR EL FLAG

//FIN DE LA FUNCIÓN

/*
ESTRATEGIA DE RESOLUCION
1- declarar variables ( numero, acumulador de positivo y acumulador negativos, seguir(variable de control para ver si seguir o no))
2- debo generar un bucle del tipo mientras (do while) que el usuario quiera.
--------- aca empieza lo que debo hacer dentro del bucle -------
3- pido un numero
4- validar que sea un numero (isnan creo)
5- analizar el signo del numero (si es posi o neg)
6- actualizo el acumulador que corresponda
7- le pregunto al usuario si quiere continuar
---------------------------------------------
8- mostrar los resultados
*/
