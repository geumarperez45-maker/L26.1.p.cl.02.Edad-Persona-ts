"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cl_persona_1 = __importDefault(require("./Cl_persona"));
// Datos de ejemplo 
let p1 = new Cl_persona_1.default("Ana", 15);
let p2 = new Cl_persona_1.default("Pedro", 14);
let p3 = new Cl_persona_1.default("Juan", 19);
let p4 = new Cl_persona_1.default("Paola", 20);
let p5 = new Cl_persona_1.default("Sara", 16);
let p6 = new Cl_persona_1.default("Luis", 18);
// Objeto que llevará el control de la estadística
let personaControl = new Cl_persona_1.default();
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
//# sourceMappingURL=Principal.js.map