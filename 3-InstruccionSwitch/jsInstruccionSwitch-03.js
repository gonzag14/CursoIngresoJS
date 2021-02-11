function mostrar()
{
	//tomo el mes
	let mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes) {
	case "Febrero":
	alert("Este mes no tiene mas de 29 dias");
	break;
   
	// el default se utiliza para en este caso los demas meses, en vez de poner mes por mes 
	default:
		alert("Este mes tiene 30 dias o mas dias"); 
	}


	
	


}//FIN DE LA FUNCIÓN