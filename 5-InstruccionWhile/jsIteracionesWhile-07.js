/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let seguir;
	let numero;
	let acumulador = 0;
	let contador = 0;
	let promedio;

	do{
		numero = parseInt(prompt("Ingrese un numero:  "));
		
		while (isNaN(numero)){
			numero = parseInt(prompt("Ese no es un numero. Reintentelo."))
		}
		acumulador = acumulador + numero; //acumulador += numero
		contador++;
		
		seguir = prompt("Quiere ingresar otro numero? s/n")
	}
	while (seguir == "s");

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN

/*
estrategua de resolucion
1 declarar variables
2  
 */