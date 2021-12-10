	
	const anterior=document.getElementById('anterior'),
		actual=document.getElementById('actual'),
		numeros=document.querySelectorAll('.numero'),
		operadores=document.querySelectorAll('.operador');
		
	const calculadora=new Calculadora();
	const display=new Display(anterior,actual);
	
	numeros.forEach(boton => {
		boton.addEventListener('click', ()=> display.agregarNumero(boton.innerHTML));
	});
	
	operadores.forEach(boton => {
		boton.addEventListener('click', () => display.computar(boton.value));
	});