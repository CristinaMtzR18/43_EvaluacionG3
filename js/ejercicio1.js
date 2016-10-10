/*
Ejercicio 1: 
Haz el juego de piedra papel o tijera con 3 turnos
 */
/*
PSEUDOCODIGO

INICIO
	declarar variables
	cadena jugada1
	cadena jugada2
	inicia programa
	funcion jugar(jugada1,jugada2){
		si (jugada1 == jugada2)
			escribe "Es empate"
		si no
			comentario "jugadas donde gana jugador 1"
			si (jugada1 == tijera && jugada2 == papel)
				escribe "Gana jugador 1"
			si (jugada1 == papel && jugada2 == piedra)
				escribe "Gana jugador 1"
			si (jugada1 == piedra && jugada2 == tijera)
				escribe "Gana jugador 1"
				
			comentario "jugadas donde gana jugador 2"
			si (jugada2 == tijera && jugada1 == papel)
				escribe "Gana jugador 2"
			si (jugada2 == papel && jugada1 == piedra)
				escribe "Gana jugador 2"
			si (jugada2 == piedra && jugada1 == tijera)
				escribe "Gana jugador 2"
		fin si
	}
	para i = 0 hasta i<3 entonces i = i+1
		escribe "Jugador 1 ingresa jugada:"
		leer jugada1
		escribe "Jugador 2 ingresa jugada:"
		leer jugada2
		llamar funcion jugar(jugada1,jugada2)
	fin para
FIN
 */

var jugador1 = 0;
var jugador2 = 0;
var empate = 0;

alert("Inicia Juego de piedra, papel o tijera");
//Declaro mi funcion. Se recomienda declarar las funciones antes de llamarlas, aunque no sean por expresion
function jugar(jugada1,jugada2){
	//Juego de las rondas. Determina ganador por ronda
	if(jugada1 === jugada2){
		alert("Es un empate en esta ronda");
		empate = empate + 1;
	}else{
		if(jugada1 === 'tijera' && jugada2 === 'papel' || jugada1 === 'papel' && jugada2 === 'piedra' || jugada1 === 'piedra' && jugada2 === 'tijera'){
			alert("Ganador de la ronda jugador 1");
			jugador1 = jugador1 + 1;
		}else{
			if(jugada2 === 'tijera' && jugada1 === 'papel' || jugada2 === 'papel' && jugada1 === 'piedra' || jugada2 === 'piedra' && jugada1 === 'tijera'){
			alert("Gana de la ronda jugador 2");
			jugador2 = jugador2 + 1;
			}
		}
	}
}
//Uso de for para ingresar nombres al arreglo, i debe ser menor a 3 porque en los arreglos se empieza a contar de cero
for(var i = 0; i < 3; i++){
	//Numero las rondas
	var ronda = i + 1;
	alert("Ronda numero " + ronda);
	//Pido la jugada del primer jugador
	var jugada1 = prompt("Jugador 1 ingresa tu jugada: ");
	//Pido la jugada del segundo jugador
	var jugada2 = prompt("Jugador 2 ingresa tu jugada: ");
	//Llamo a mi funcion jugar para determinar quien gana
	jugar(jugada1,jugada2);
}
//Determina el ganador del juego. Resultado de las tres rondas
if(jugador1 === jugador2){
	alert("No hay ganador en este juego. Es un empate");
}else{
	if(jugador1 > jugador2){
		alert("El ganador del juego es Jugador 1");
	}else{
		alert("El ganador del juego es jugador 2");
}
}
