/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo

	sexo = prompt("Ingrese su sexo f/m:").toLowerCase();
	
	// a : sexo no sea valido    	b: sexo sea invalido  while ( sexo !="f" && sexo !="m")
	while(!(sexo == "f" || sexo == "m")){
		sexo = prompt("El dato es invalido. Reintentelo").toLowerCase();
		
	}

	document.getElementById("txtIdSexo").value = sexo;	



	
}//FIN DE LA FUNCIÓN