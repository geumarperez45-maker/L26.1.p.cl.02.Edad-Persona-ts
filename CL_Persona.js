"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cl_persona {
    _nombre;
    _edadPersona;
    acEdadPersona;
    cntPersona;
    constructor(n = "", eP = 0) {
        this._nombre = n;
        this._edadPersona = eP;
        this.acEdadPersona = 0;
        this.cntPersona = 0;
    }
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set edadPersona(eP) {
        this._edadPersona = +eP;
    }
    get edadPersona() {
        return this._edadPersona;
    }
    procesarPersona(ps) {
        // Acumular la edad del objeto que entra
        this.acEdadPersona += ps.edadPersona;
        // Contar la persona
        this.cntPersona++;
    }
    edadPromedio() {
        if (this.cntPersona === 0)
            return 0;
        return this.acEdadPersona / this.cntPersona;
    }
}
exports.default = Cl_persona;
//# sourceMappingURL=CL_Persona.js.map