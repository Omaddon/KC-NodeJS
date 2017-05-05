'use strict';

// funcion que escribe un texto en la consola tras 2 segundos
function escribeTras2Segundos (texto, callback){
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000);
}

// vamos a hacer un bucle de llamadas a nuestra funcion
for (let i = 0; i < 5; i++) {
    escribeTras2Segundos('texto' + i, function() {

    });
}