/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	clave = prompt("Ingrese el numero clave");

	while(clave != "utn750"){
		clave = prompt("La clave es incorrecta")
	}
	alert("La clave es correcta")

	/* while(clave){
		if(clave != "utn750"){
			alert("La clave es incorrecta")
		}
		else {
			alert("La clave es correcta")
		}
		break;
	}
*/
	
}//FIN DE LA FUNCIÓN
