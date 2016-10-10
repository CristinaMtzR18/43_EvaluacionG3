/*
Ejercicio 2: 
Declara un arreglo vacío denominado nombres. Pide al usuario tres nombres
y almacena esos nombres como elementos arreglo. A continuación muestra el
contenido en un mensaje.
 */
/*
PSEUDOCODIGO
INICIO
	declara variables
	arreglo  nombres= []
	cadena nombre
	inicio programa
	para i = 0 hasta i<3 entonces i = i+1
		escribe "Ingresa nombre"
		leer nombre
		escribe "El nombre ingresado es", nombre
	fin para
FIN
 */

//Declaracion de un arreglo vacio
var nombres = [];
//Uso de for para ingresar nombres al arreglo, i debe ser menor a 3 porque en los arreglos se empieza a contar de cero
for(var i = 0; i < 3; i++){
	contador = i + 1;
	var nombre = prompt("Introduce el nombre numero " + contador + " :");
	//push añade nuevo elemento al arreglo
	nombres.push(nombre);
	//Me muestra en pantalla el nombre que escribi
	alert("El nombre ingresado es: " + nombres[i]);
	//Da en consola la lista de los nombres que escribi
	console.log(nombres[i]);
}