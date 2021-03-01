/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
 */
function mostrar()
{		//MINUTO 52.11 CLASE 10
	//declarar variables
	let numero;
	let seguir;
	let contadorPositivos = 0;
	let contadorNegativos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let acumuladorPositivos = 0;
	let acumuladorNegativos = 0;
	let promedioPositivos = 0;
	let promedioNegativos = 0;
	let diferencia;

	// generar un bucle del tipo mientras el usaurio quiera (do while)
do{  
	//pido numeros
	numero = parseInt(prompt("Ingrese un numero"));
	
	//analizar el signo del numero y actuar en consecuencia
	if(numero < 0 ){
		// negativos
		acumuladorNegativos += numero    // acumuladorNegativos = acumuladorNegativos + numero
		contadorNegativos++
	}
	else if (numero == 0 ) {
		//ceros
		contadorCeros++;
	}
	else{
		//positivos
		acumuladorPositivos += numero;
		contadorPositivos++;

	}
	
	if(numero % 2 == 0){
//analizar si es par
	contadorPares++;

	}
	
	
	
	seguir = prompt("Quiere seguir? s/n")
}
while(seguir == "s"  );
	// hacer los calculos que necesitan los datos conseguidos durante el bucle
	// sacar promedio de positivos, negativos
 if(contadorPositivos > 0  ){
	promedioPositivos = acumuladorPositivos / contadorPositivos;

 }
 if(contadorNegativos > 0){
	 promedioNegativos = acumuladorNegativos / contadorNegativos;
 }
//sacar diferncia
diferencia = contadorPositivos - contadorNegativos;


//muestro los resultados
console.log("   Suma de los negativos.      " + acumuladorNegativos);
console.log("   Suma de los positivos      " + acumuladorPositivos);
console.log("   Cantidad de positivos      " + contadorPositivos);
console.log("  Cantidad de negativos       " + contadorNegativos);
console.log("   Cantidad de ceros      " + contadorCeros);
console.log("   Cantidad de números pares.      " + contadorPares);
console.log("  Promedio de positivos.       " + promedioPositivos);
console.log("   Promedios de negativos      " + promedioNegativos);
console.log("    Diferencia     " + diferencia);
	
	


	
	 

	




}//FIN DE LA FUNCIÓN

