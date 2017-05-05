'use strict';

// funcion que escribe un texto en la consola tras 2 segundos
function escribeTras2Segundos (texto, callback){
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000);
}

// bucle recursivo asincrono en serie
// llama a func con cada elemenot de un array
function serie (arr, func, callbackFin) {
    if (arr.length === 0) {
        callbackFin();
        return;
    }

    func('text' + arr.shift(), function(){
        serie(arr, func, callbackFin);
    });
}

console.log('empiezo...');

// invocamos a la funcion ayudante
serie([1,2,3,4,5], escribeTras2Segundos, function(){
    console.log('fin');
});