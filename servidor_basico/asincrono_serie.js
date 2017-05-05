'use strict';

// funcion que escribe un texto en la consola tras 2 segundos
function escribeTras2Segundos (texto, callback){
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000);
}

// bucle recursivo asincrono en serie
// llama a func n veces
function serie (n, func, callbackFin) {
    if (n === 0) {
        callbackFin();
        return;
    }
    n--;
    func('text' + n, function(){
        serie(n, func, callbackFin);
    });
}

console.log('empiezo...');

// invocamos a la funcion ayudante
serie(5, escribeTras2Segundos, function(){
    console.log('fin');
});