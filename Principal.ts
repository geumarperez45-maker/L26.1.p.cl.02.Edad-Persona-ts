import Cl_persona from "./Cl_Persona.js";

// Datos de ejemplo 
let p1 = new Cl_persona("Ana", 15);
let p2 = new Cl_persona("Pedro", 14);
let p3 = new Cl_persona("Juan", 19);
let p4 = new Cl_persona("Paola", 20);
let p5 = new Cl_persona("Sara", 16);
let p6 = new Cl_persona("Luis", 18);

// Variables para llevar el control (La "Estadística")
let acEdad = 0;
let cntPersona = 0;

// El MÉTODO para procesar (como pidió la profe)
let procesarPersona = (p: Cl_persona) => {
    acEdad += p.edadPersona;
    cntPersona++;
};

// Procesamos cada objeto
procesarPersona(p1);
procesarPersona(p2);
procesarPersona(p3);
procesarPersona(p4);
procesarPersona(p5);
procesarPersona(p6);

// El MÉTODO para el promedio
let calcularPromedio = () => {
    if (cntPersona > 0) return acEdad / cntPersona;
    else return 0;
};

let salida = document.getElementById("salida");
if (salida) {
 salida.innerHTML += <br> Edad promedio: ${calcularPromedio().toFixed(2)};
}