'use strict';

// definimos una función constructora de objetos
function Persona (name) {
    this.name = name;
}

// construimos un objeto
const luis = new Persona('Luis');

// añadimos propiedades al prototipo de las Personas
Persona.prototype.saluda = function(){
    console.log('Hola, me llamo', this.name);
};

// ahora todas las Personas creadas y las nuevas que se creen podrán 'saludar'
luis.saluda();

/* ------------------------ Herencia de Persona ------------------------ */

function Agente (name) {
    // Heredamos el constructor de Persona
    Persona.call(this, name);
}

// Heredamos las propiedades (y métodos) de Persona
Agente.prototype = new Persona ('da igual lo que pongamos');

const smith = new Agente('Smith');
smith.saluda();

/* ------------------------ Herencia Múltiple ------------------------ */

// Patrón Mixin
function SuperHerore () {
    this.vuela = function (){
        console.log(this.name, 'vuela');
    }
    this.esquivaBalas = function(){
        console.log(this.name, 'esquiva balas');
    }
}

// Copiamos todas las propiedades de 'SuperHeroe' a el prototipo de Agente
Object.assign(Agente.prototype, new SuperHerore());
smith.esquivaBalas();
smith.vuela();