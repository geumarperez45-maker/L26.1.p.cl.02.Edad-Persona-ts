class Cl_persona {
  private _nombre: string;
  private _edadPersona: number;

  // Atributos estáticos (compartidos por todas las instancias)
  // Estos equivalen a los acumuladores de la imagen
  private static acEdadPersona: number = 0;
  private static cntPersona: number = 0;

  constructor(n: string, eP: number) {
    this._nombre = n;
    this._edadPersona = eP;
    
    // Al crear cada persona, llamamos automáticamente al proceso de acumulación
    this.procesarPersona();
  }

  // Lógica interna para actualizar los totales globales
  private procesarPersona(): void {
    Cl_persona.acEdadPersona += this._edadPersona;
    Cl_persona.cntPersona++;
  }

  // Método estático para obtener el promedio de todas las personas creadas
  public static edadPromedio(): number {
    if (this.cntPersona === 0) return 0;
    return this.acEdadPersona / this.cntPersona;
  }

  // Getters para los reportes
  public static getAcumulado(): number {
    return this.acEdadPersona;
  }

  public static getContador(): number {
    return this.cntPersona;
  }

  // Getters de instancia (opcionales)
  get nombre(): string { return this._nombre; }
  get edadPersona(): number { return this._edadPersona; }
}

// --- PRUEBA DEL PROGRAMA ---

// Creamos las personas (automáticamente se van sumando al total)
new Cl_persona("Ana", 15);
new Cl_persona("Pedro", 14);
new Cl_persona("Juan", 19);
new Cl_persona("Paola", 20);
new Cl_persona("Sara", 16);
new Cl_persona("Luis", 18);

// Mostramos los resultados finales accediendo a la clase
console.log(`Edad total acumulada (acEdadPersona): ${Cl_persona.getAcumulado()}`);
console.log(`Cantidad de personas (cntPersona): ${Cl_persona.getContador()}`);
console.log(`Edad promedio: ${Cl_persona.edadPromedio().toFixed(2)}`);