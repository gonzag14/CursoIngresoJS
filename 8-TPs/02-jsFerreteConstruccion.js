/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let alambre;
    let largoTerreno;
    let anchoTerreno;

    largoTerreno = parseInt(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseInt(document.getElementById("txtIdAncho").value);

    alambre = ((largoTerreno +  anchoTerreno) * 2) * 3;

    alert("Tiene que comprar " + alambre + " metros de alambre.");        

}
function Circulo () 
{
    // Hacer de vuelta
	
    let radio;
    let circunferencia;


    radio = parseFloat(document.getElementById("txtIdRadio").value);

    diametro = radio * 2;
    circunferencia = 3.14 * diametro;
   
    
    alert("Tiene que comprar " + circunferencia * 3 + " metros de alambre.")
}
function Materiales () 
{
	let cemento = 2;
    let cal = 3;
    let anchoTerreno;
    let largoTerreno;
    let resultadoCal;
    let resultadoCemento;

    largoTerreno = parseInt(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseInt(document.getElementById("txtIdAncho").value);

    resultadoCemento = cemento * anchoTerreno * largoTerreno;
    resultadoCal = cal * anchoTerreno * largoTerreno;

    alert("Usted necesita " + resultadoCemento + " bolsas de cemento y " + resultadoCal + " bolsas de cal.");

    







}