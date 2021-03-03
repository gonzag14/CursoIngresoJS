/* 
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.

*/

function mostrar()
{
	let sexo;
	let edad;
	let temperatura;
	let estadoCivil;
	let nombre;
	let seguir;

	let flag = 1;
	let maxTemp;
	let maxNombre;

	let contMayorViudo = 0;
	let contHSV = 0;
	let contJovatoConFiebre = 0
	let acumEdadHS = 0;
	let contHS = 0;
	let promedio;


	do{

		nombre = prompt("Ingrese nombre: ")
		edad = parseInt(prompt("Ingrese edad: "));
		while (edad <= 0 || isNaN(edad)){
			edad = parseInt(prompt("Error. Ingrese edad: "))
		}
		sexo = prompt("Ingrese sexo m/f").toLowerCase();    //tolowercase es para la min y mayus
		while( sexo != "f" && sexo != "m"){
		sexo = prompt("Error.Ingrese estado civil m/f: ").toLowerCase();
		}
		
		estadoCivil = prompt("Ingrese estado civil soltero/casado/viudo: ").toLowerCase()
		while(estadoCivil != "casado" && estadoCivil != "soltero" && estadoCivil != "viudo"){
		
			estadoCivil = prompt("Error. Ingrese estado civil soltero/casado/viudo: ").toLowerCase();
		}
		
		temperatura = parseFloat(prompt("Ingrese temperatura: "));
		while (temperatura <= 0 || isNaN(temperatura)){
			temperatura = parseInt(prompt("Error. Ingrese temperatura: "))
		}

		// punto A (cosas para ir resolviendo el punto a)
		if( flag || temperatura > maxTemp ){
			maxTemp = temperatura;
			maxNombre = nombre;
			flag = 0;
		}
		// punto B (cosas para ir resolviendo el punto a)
		if (edad >= 18 && estadoCivil == "viudo" ){
			contMayorViudo++

		}
		// punto C                          a tener en cuenta el & y | ()
		if( sexo == "m" && (estadoCivil == "soltero" || estadoCivil == "viudo")){      // o sexo == "m" && estadoCivil != "casado"
			contHSV++;
		}
		// punto d
		if( edad > 60 && temperatura > 38){
			contJovatoConFiebre++;;
		}

		//punto e
		if(sexo == "m" && estadoCivil == "soltero"){
			acumEdadHS += edad;
			contHS++;
		}


		seguir = prompt("Quiere ingresar otro pasajero?: ");
	}
	while(seguir == "s");

	//mostrar los resultados (informacion)

	console.log("a) El nombre de la persona con mas temperatura. " + maxNombre + " con " + maxTemp + "°C" )
	console.log("b) mayores viudos: " + contMayorViudo);
	console.log("c) Hombres solteros o viudos " + contHSV)
	console.log("d) Jovatos con fiebre: " + contJovatoConFiebre)
	
	
	
	if(contHS != 0){
		promedio = acumEdadHS / contHS;
	console.log("e) Promedio de hombres solteros: " + promedio.toFixed(2));
	}
	else {
		console.log("e) No se registraron hombres solteros")
	}
/*
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
}


/*
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/