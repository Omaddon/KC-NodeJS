'use strict';

// constructor de objetos
function Coche (ruedas) {
    this.ruedas = ruedas;
    this.cuantasRuedas = function() {
        // console.log('this', this);
        console.log('Tiene', this.ruedas, 'ruedas');
    };
}

const todoTerreno = new Coche(4);

// todoTerreno.cuantasRuedas();

// Corregimos problema de perder el 'this' al llamarse el metodo desde otro sitio
setTimeout(todoTerreno.cuantasRuedas.bind(todoTerreno),1000);

// Usamos call (apply es igual) para ejecutar el método con un 'this' específico. 
// 'bind' NO ejecuta el método
const autobus = new Coche(12);
autobus.cuantasRuedas.call(todoTerreno);