import { Cl_persona } from './Cl_persona';

// 1. Datos de entrada según la tabla de la imagen
// Al usar "new", el constructor de la clase procesa automáticamente los totales
const p1 = new Cl_persona("Ana", 15);
const p2 = new Cl_persona("Pedro", 14);
const p3 = new Cl_persona("Juan", 19);
const p4 = new Cl_persona("Paola", 20);
const p5 = new Cl_persona("Sara", 16);
const p6 = new Cl_persona("Luis", 18);

// 2. Salida de resultados requerida
// Accedemos a los métodos a través del nombre de la Clase (Cl_persona) 
// porque son métodos estáticos (static).
console.log("--- RESULTADOS DEL GRUPO ---");
console.log(`Edad total acumulada (acEdadPersona): ${Cl_persona.getAcumulado()}`);
console.log(`Cantidad de personas (cntPersona): ${Cl_persona.getContador()}`);
console.log(`Edad promedio: ${Cl_persona.edadPromedio().toFixed(2)}`);

// Extra: Si quisieras ver los datos de una persona específica:
console.log(`\nÚltima persona procesada: ${p6.nombre} con ${p6.edadPersona} años.`);