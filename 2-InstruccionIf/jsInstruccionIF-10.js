function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let notas;
	let maximo = 10
	let minimo = 1
	
	notas = Math.round(Math.random() * (maximo - minimo) + minimo);

	// otra forma de hacerlo
	// let nota
	//nota = Math.round(Math.random() * 9 + 1);
	//nota = Math.Floor(Math.random() * 10) + 1;


	if (notas >=9 && notas <= 10) 
	{alert( notas + " EXCELENTE");}

	else{ 
	
		if (notas >= 4 )
		{alert(notas + " APROBÓ");}

		else
		{alert(notas + " Vamos, la proxima se puede.");}



	}
// Repasar clase miercoles 10/02 hora de clase 20.00
}//FIN DE LA FUNCIÓN