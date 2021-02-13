function mostrar() {
  let destino;
  let estacion;
  const precio = 15000;
  let precioFinal;
  let aumento = 0;
  let descuento = 0;

  destino = document.getElementById("txtIdDestino").value;
  estacion = document.getElementById("txtIdEstacion").value;

  switch (estacion) {
    case "Invierno":
      if (destino == "Bariloche") {
        aumento = 20;
      } else if (destino == "Mar del Plata") {
        descuento = 20;
      } else {
        descuento = 10;
      }
      break;

    case "Verano":
      if (destino == "Bariloche") {
        descuento = 20;
      } else if (destino == "Mar del Plata") {
        aumento = 20;
      } else {
        aumento = 10;
      }
      break;

    case "Otoño":
    case "Primavera":
      if (destino != "Cordoba") {
        aumento = 10;
      }

      break;
  }

  if (aumento != 0) {
    precioFinal = precio + (precio * aumento) / 100;
  } else if (descuento != 0) {
    precioFinal = precio - (precio * descuento) / 100;
  } else {
    precioFinal = precio;
  }
  alert("Precio Final $" + precioFinal);
} //FIN DE LA FUNCIÓN
//1- Definir Variables
//2- Relevar los datos de entrada (destino/estacion)
//3- Definir un ambito para cada estacion
//4- Dentro de cada ambito del punto definir un ambito para cada uno
//5- Calculamos el precio final
//6- Informamos el precio final
