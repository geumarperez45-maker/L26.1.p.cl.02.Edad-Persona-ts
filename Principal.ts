import Cl_persona from "./Cl_persona";

// Datos de ejemplo 
let p1 = new Cl_persona("Ana", 15);
let p2 = new Cl_persona("Pedro", 14);
let p3 = new Cl_persona("Juan", 19);
let p4 = new Cl_persona("Paola", 20);
let p5 = new Cl_persona("Sara", 16);
let p6 = new Cl_persona("Luis", 18);

// Objeto que llevará el control de la estadística
let personaControl = new Cl_persona();

personaControl.procesarPersona(p1);
personaControl.procesarPersona(p2);
personaControl.procesarPersona(p3);
personaControl.procesarPersona(p4);
personaControl.procesarPersona(p5);
personaControl.procesarPersona(p6);

let salida = document.getElementById("salida");
if (salida) {
  salida.innerHTML = `
    <br> Edad promedio: ${personaControl.edadPromedio().toFixed(0)}
  `;
}