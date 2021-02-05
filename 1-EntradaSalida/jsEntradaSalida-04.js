/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;  //declaro variable

	nombre = prompt("Ingrese su nombre");  // asigno a la variable el dato que le pido al usaurio.

	document.getElementById("txtIdNombre").value = nombre; //muestro por pantalla el nombre que le pido al usuario

	
	
}

