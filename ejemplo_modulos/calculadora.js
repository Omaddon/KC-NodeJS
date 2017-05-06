'use strict';

console.log('Módulo calculadora se está inicializando...');
console.log('Listo!');

function suma(a, b) {
    return a + b;
}

function resta(a,b) {
    return a - b;
}

/* de esta forma solo exporta el último, pues export es un objeto vacío 
 * al que le voy añadiendo cosas.
            module.exports = suma;
            module.exports = resta;
*/

// podemos usar exports.suma = ... (export es un alias de module.exports).
// si hacemos exports = ... nos cargamos el alias!!
module.exports = {
    suma: suma,
    resta: resta
};

// también se podrían definir las funciones de la siguiente manera:
/*
module.exports.suma = function(a,b) {
    return a + b;
}
*/