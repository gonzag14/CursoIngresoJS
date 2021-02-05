/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
    let aumento;
	let nuevoSueldo;
	
	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);

	aumento = (sueldo * 10) / 100;

	 
	nuevoSueldo = sueldo + aumento;
																  //para mostrar decimales, este caso 2
															                    
	document.getElementById("txtIdResultado").value = nuevoSueldo.toFixed(2);

	// ver que es parseFloat y su diferencia con parseint
	// cada vez que pido un numero unsar parseint o parseFloat
}
