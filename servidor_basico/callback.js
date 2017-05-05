'use strict';

function suma (a, b, callback){
    const resultado = a + b;
    setTimeout(function(){
        callback(resultado);
    }, 2000);
}

const dato = suma(40, 2, function(res){
    console.log('El resultado es', res);
});

console.log('El dato es', dato);