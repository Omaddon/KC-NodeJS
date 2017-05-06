'use strict';

const calculadora = require('./calculadora');
calculadora.marca = 'Siemens';

console.log(calculadora.suma(40,2));

console.log(calculadora.marca);
const otraCalculadora = require('./calculadora');
console.log(otraCalculadora.marca);