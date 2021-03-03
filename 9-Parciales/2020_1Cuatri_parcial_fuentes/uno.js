
function mostrar()   //PARCEFLAOT SE USA CUANDO PONEMOS DECIMAL, EN ESTE CASO DEL PARCIAL 2020 DINERO.
{
	let tipo;
	let cantidad;
	let precio;
	let marca;
	let fabricante;
	let acumAlchol = 0;
	let acumBarbijo = 0;
	let acumJabon = 0;
	let contAlcohol = 0;
	let contBarbijo = 0;
	let contJabon = 0
	let precioAlcoholBarato ;
	let cantidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	let promedioCompra;
	let mayorTipo;
	let flagAlcohol = 0;
	let mensajeAlcohol = "No se compraron alcoholes"
	let mensajeB;
	let mensajeJabon;
//tengo q generar un bucle que se repita 5 veces
//(tipo, cantidad, marca y fabricante ) valido todo segun corresponda
//utilizo for pq se de antemano la cantidad de repeticiones

	for (let i = 0; i < 5 ; i++){

		tipo = prompt("Ingrese tipo: barbijo, alcohol o jabon.");
		while(tipo != ("alcohol") & tipo != ("barbijo") && tipo != ("jabon")){
			tipo = prompt("Error. Ingrese tipo: ")
		}
		precio = parseFloat(prompt("Ingrese precio entre $100 y $300"))
		while (precio < 100 || precio > 300 || isNaN(precio) ){				//!(precio >= 100 && precio <= 300)
			precio = prompt("Error. Ingrese precio entre $100 y $300");
		}
		cantidad = parseInt(prompt("Ingrese cantidad"))
		while(   !(cantidad > 0 && cantidad <= 1000)  ){
			cantidad = prompt("Error. Ingrese cantidad max 1000")
		}
		
		marca = prompt("Ingrese marca");
		fabricante = prompt("Ingrese fabricante");

		//A- tengo que reconocer si el producto es alcohol y recordar el precio y la cnatidad y el fabricante del menor precio
		switch (tipo){
			case "alcohol":
			acumAlchol += cantidad
			contAlcohol++
			
			if(flagAlcohol == 0 || precioAlcoholBarato > precio){
			precioAlcoholBarato = precio;
			cantidadAlcoholBarato = cantidad;
			fabricanteAlcoholBarato = fabricante;
			flagAlcohol = 1
			}

			break;
			case "barbijo":
			acumBarbijo += cantidad
			contBarbijo

			break;
			//C- tengo que acumular la cantidad de jabones
			case "jabon":
			acumJabon += cantidad
			contJabon++

			break;
		}






	}
//B- tengo que acumular las cantidades de unidades de cada tipo y la cantidad tipo de prodcuto para sacar el promedio de compra del acumulador mayor

if(acumAlchol > acumBarbijo && acumAlchol > acumJabon ){
//acumalcohol sea mayor
	mayorTipo = "alcohol"
	promedioCompra = acumAlchol / contAlcohol;

}
else if( acumBarbijo > acumJabon  &&  acumBarbijo >= acumAlchol ){
// acumbarbijo sea mayor
	mayorTipo = "barbijo"
	promedioCompra = acumBarbijo / contBarbijo;
}

else{
//acumjabon sea mayor
	mayorTipo = "jabon"
	promedioCompra = acumJabon / contJabon;
}
// por si no se ingresa alcohol 
if(flagAlcohol == 1){
	mensajeAlcohol = "A- Fabricante alcohol barato: " + fabricanteAlcoholBarato +
	"\nCantidad: " + cantidadAlcoholBarato +
	"\nPrecio: " + precioAlcoholBarato;
}


mensajeB = "B- Tipo con mas unidades: " + mayorTipo +  "\n Promedio: " + promedioCompra;
mensajeJabon = "C- Unidades de jabon: " + acumJabon;

alert( mensajeAlcohol + "\n" + mensajeB + "\n" + mensajeJabon );





// \n \ = se hace alt 92





	
}






