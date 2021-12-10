class Display{
	constructor(anterior,actual){
		this.anterior=anterior;
		this.actual=actual;
		this.calculador=new Calculadora();
		this.tipoOperacion=undefined;
		this.valActual='';
		this.valAnterior='';
		this.signos={
			sumar: '+',
			restar: '-',
			multiplicar: 'x',
			dividir: '/',
			porcentaje: '% de '
		}
	}
	
	borrar(){
		this.valActual=this.valActual.toString().slice(0,-1);
		this.imprimirValores();
	}
	
	borrarTodo(){
		this.valActual='';
		this.valAnterior='';
		this.tipoOperacion=undefined;
		this.imprimirValores();
	}
	
	computar(tipo){
		this.tipoOperacion!=='igual' && this.calcular();
		
		this.tipoOperacion=tipo;
		this.valAnterior=this.valActual || this.valAnterior;
		this.valActual='';
		this.imprimirValores();
	}
	
	agregarNumero(numero){
		if(numero==='.' & this.valActual.includes('.')) return;
		
		this.valActual=this.valActual.toString() + numero.toString();
		if(this.valActual=='.'){ //eliminamos el error ocurrido al solo dar click al punto
			this.valActual='0.';
		}
		this.imprimirValores(); 
	}
	
	imprimirValores(){
		this.actual.textContent=this.valActual; //los queremos almacenar en actual y anterior
		this.anterior.textContent=this.valAnterior + (this.signos[this.tipoOperacion] || '');
	}
	
	calcular(){
		const valActual=parseFloat(this.valActual),
			valAnterior=parseFloat(this.valAnterior);
			
		if(isNaN(valActual) || isNaN(valAnterior)) return;
		
		this.valActual=this.calculador[this.tipoOperacion](valAnterior,valActual);
	}
}