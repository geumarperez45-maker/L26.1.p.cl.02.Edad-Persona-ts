export default class Cl_Persona {
  private _nombre: string;
  private _edadPersona: number;
  private acEdadPersona: number;
  private cntPersona: number;

  constructor(n: string = "", eP: number = 0) {
    this._nombre = n;
    this._edadPersona = eP;
    this.acEdadPersona = 0;
    this.cntPersona = 0;
  }

  set nombre(n: string) {
    this._nombre = n;
  }

  get nombre(): string {
    return this._nombre;
  }

  set edadPersona(eP: number) {
    this._edadPersona = +eP;
  }

  get edadPersona(): number {
    return this._edadPersona;
  }

  procesarPersona(ps: Cl_Persona) {
    // Acumular la edad del objeto que entra
    this.acEdadPersona += ps.edadPersona;
    // Contar la persona
    this.cntPersona++;
  }

  edadPromedio(): number {
    if (this.cntPersona === 0) return 0;
    return this.acEdadPersona / this.cntPersona;
  }
}
