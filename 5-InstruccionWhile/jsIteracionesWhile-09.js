/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables

let numero;
let maximo;
let minimo;
let seguir;
let flag = 0;

// armo un bucle del tipo mientras el usuario quiera (do while)
do{
        //pido un numero
    numero = parseInt(prompt("Ingrese un numero"));

    //debo reconocer si estoy pidiendo por primera vez
      // si es asi inicializo max y min  
    if (flag == 0 || numero > maximo){
    maximo = numero;
   }
   if (flag == 0 || numero < minimo){
    minimo = numero;    
    flag = 1;
   }

    seguir = prompt("Quiere ingresar otro numero? s/n")
    } while (seguir == "s");

    //muestro la informaicon (max y min)

    document.getElementById("txtIdMaximo").value = maximo;
    document.getElementById("txtIdMinimo").value = minimo;
  






	
}//FIN DE LA FUNCIÓN


// MINUTO 2:19 CLASE 10
/*
estrategia 
1 resolucion de variables( numero max min seguir)
2 genero un bucle del tipo mientras el usuario quiera.
--- aca coloco el codigo que va dentro del bucle
3 pido un numero 
4 valido el numero
5 identifico si estoy en la primer iteracion o en las siguientes
5.1 si estoy en la primer iteracion numero va a ser mi maximo y mi minimo
5.2 si no estoy en la primer iteracion 
5.2.1 me fijo si el numero es un nuevo maximo
5.2.2 me fijo si el numero es un nuevo minimo
6 pregunto si ingresa otro numero
7 informo el maximo y el minimo




*/