function mostrar()
{
	//Al presionar el botón pedir 5 números 
	//e informar la suma acumulada y el promedio
	
	let acumulador = 0;
	let numero;
	let promedio;
	let i = 0;

	while ( i < 5){
		
		numero = parseInt(prompt("Ingrese un numero: "));

		acumulador = acumulador + numero;

		i++
	}

	promedio = acumulador / 5;

	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
	
	
	
	
	
	
	
	




	


}//FIN DE LA FUNCIÓN