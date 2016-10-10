/*
EJERCICIO 3
Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, 
es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo 
complejo: "La ruta nos aporto otro paso natural".</p>
 */
/*
PSEUDOCODIGO

INICIO
	declarar variables
	palabra
	inicia programa
	declaro funcion isPalindromo (argumento palabra)
		para
FIN
 */
 
 ()
function isPalindromo (palabra){
	var frase = palabra.replace (/\s/g,"");
	for (var i = 0; i< frase.length; i ++){
		var x=frase[i].toLowerCase();
		var y= frase [frase.length-(i +1)].toLowerCase();
		if (x!==y){
			return false; 	
		} 	 
	} 	
	return true; 
} 

isPalindromo("La ruta nos aporto otro paso natural");

palabra = prompt ("Escribe una palabra o frase");
if(isPalindromo(palabra) !== false){
	alert(palabra + " SI es palindromo");
	console.log (isPalindromo(palabra));
}else{
	alert(palabra + " NO es palindromo");
	console.log (isPalindromo(palabra));
}
