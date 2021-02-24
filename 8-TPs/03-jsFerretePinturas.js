/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado
 (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let fahrenheit ;
    let respuesta;

    Fahrenheit = parseInt(document.getElementById("txtIdTemperatura").value);

    respuesta = (Fahrenheit - 32) * 0.555556;
    

    alert(Fahrenheit + " fahrenheit son " + respuesta.toFixed(1) + " centigrados.")


}

function CentigradosFahrenheit () 
{
	let centigrados ;
    let respuesta;

    centigrados = parseInt(document.getElementById("txtIdTemperatura").value);

    respuesta = (centigrados * 1.8) + 32;
    

    alert(centigrados + " centigrados son " + respuesta.toFixed(1) + " faherenheit.")

}
