'use strict';

// funcion que escribe un texto en la consola tras 2 segundos
function escribeTras2Segundos (texto, callback){
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000);
}

console.log('empiezo...');

// utilizamos la funcion
escribeTras2Segundos('texto1', function() {
    escribeTras2Segundos('texto2', function() {
        console.log('fin.');
    });
});
