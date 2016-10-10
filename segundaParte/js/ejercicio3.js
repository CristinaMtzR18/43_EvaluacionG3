/*
EJERCICIO 3
Definir una función que determine si la cadena de texto 
que se le pasa como parámetro es un palíndromo, es decir,
si se lee de la misma forma desde la izquierda y desde la
derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".
 */
/*
PSEUDOCODIGO

INICIO
	declaro funcion isPalindromo (argumento palabra)
		leer palabra
		recorrer palabra y sustituir espacios para hacer una sola palabra
		cambiar letras por su equivalente en minuscula
		comparar la palabra con otra palabra2
		si palabra !== palabra2
			devolver falso
		si no
			devolver verdadero
		fin si
	fin de la funcion
	declarar frase
	si llamar funcion isPalindromo !== false
		escribir "Es palindromo"
	si no
		escribri "No es palindromo"
	fin si
FIN
 */

//Funcion que nos devuelve un valor booleeno, verdadero si la cadena es palindromo y 
//falso si no lo es. Las funciones que empiezan con is devuelven este tipo de valor
function isPalindromo (palabra){
	// remplaza los espacios, hace de la frase una sola "palabra"
	var frase = palabra.replace (/\s/g,"");
	//recorre cada letra de la palabra
	for (var i = 0; i< frase.length; i ++){
		//remplaza cada letra por su equivalente en minuscula
		var x=frase[i].toLowerCase();
		//nueva palabra para comparar de atras
		var y= frase [frase.length-(i +1)].toLowerCase();
		//iguala las palabras para devolver falso si son diferentes o verdadero si son iguales
		if (x!==y){
			return false; 	
		} 	 
	} 	
	return true; 
} 
//declaro una variable con la frase a evaluar
var palabra="La ruta nos aporto otro paso natural";
//llamo la funcion para determinas si es palindromo o no, sin embargo como es un valor booleano
//se hace uso de otro if para ayudar a determinar la validacion de la frase
if(isPalindromo(palabra) !== false){
	alert(palabra + " SI es palindromo");
	console.log (isPalindromo(palabra));
}else{
	alert(palabra + " NO es palindromo");
	console.log (isPalindromo(palabra));
}
//Segunda forma de uso de la funcion donde la variable palabra toma un valor que es
//ingresado por el usuario
palabra = prompt ("Escribe una palabra o frase");
//llamo la funcion para determinas si es palindromo o no, sin embargo como es un valor booleano
//se hace uso de otro if para ayudar a determinar la validacion de la frase
if(isPalindromo(palabra) !== false){
	alert(palabra + " SI es palindromo");
	console.log (isPalindromo(palabra));
}else{
	alert(palabra + " NO es palindromo");
	console.log (isPalindromo(palabra));
}
