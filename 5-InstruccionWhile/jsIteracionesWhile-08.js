/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
  
  //declaracion de variables
  let numero;
  let numPos = 0;
  let numNeg = 1;
  let seguir;
  let flag = 0;

    //debemos armar un bucle del tipo mientras el usuario quiera (do while)
  do{
    numero = parseInt(prompt("Ingrese un numero"));
    
      
    //analizar el signo de cada numero --> dentro del bucle
     if( numero >= 0 ){
      
      //positivo
      numPos = numPos + numero
         }

     else{
      //negativo
      flag = 1;
      numNeg = numNeg * numero      
     }
   
    


    seguir = prompt("Quiere ingresar otro numero? s/n");
  }
  while(seguir == "s");

  if (flag == 0){
    numNeg = 0;
    

  }

  document.getElementById("txtIdSuma").value = numPos
  document.getElementById("txtIdProducto").value = numNeg
  
  






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
