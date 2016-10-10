/*
EJERCICIO 4
Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:
Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar().
Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar().
Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.
 */
/*
PSEUDOCODIGO
INICIO
	
FIN
 */
//los objetos inician con letra mayuscula
var Persona = function(nombre, edad, genero){
	this.nombre = nombre,
	this.edad = edad,
	this.genero = genero,

	Persona.prototype.obtDetalles = function (){
		alert("Nombre: " + this.nombre + "\nEdad: " + this.edad + "\nGenero: " + this.genero)
	}
};

var Estudiante = function(curso,grupo){
	this.curso = curso,
	this.grupo = grupo,

	this.registrar = function(){
		alert("Alumno Registrado" + "\nCurso: " + this.curso + "\nGrupo: " + this.grupo);
	}
};

var Profesor = function(asignatura,nivel){
	this.asignatura = asignatura,
	this.nivel = nivel,

	this.asignar = function(){
		alert("Profesor asignado" + "\nAsignatura: " + this.asignatura + "\nNivel: " + this.nivel);
	}
};

var persona1 = new Persona("Kaito",22,"Masculino");
persona1.obtDetalles();

var estudiante1 = new Estudiante("segundo", "A");
estudiante1.registrar();

var profesor1 = new Profesor("Primeros Auxilios", "Intermedio");
profesor1.asignar();

