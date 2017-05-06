'use strict';

const fs = require('fs');
const async = require('async');
//import async from 'async/concat';
const versionModulo = require('./versionModulo');


function versionModulos (callback) {
    // leemos contenido de node_modules
    fs.readdir('./node_modules', (err, lista) => {
        if (err) {
            callback(err);
            return;
        }

        // esta función la vamos a ejecutar con cada elemento de la lista de directorios
        function iterador(item, callbackIterador) {
            // descartamos ficheros o carpetas que empiecen por '.'
            if (item[0] === '.'){
                callbackIterador(null); // No hace falta pasarle el error si todo ha ido bien
                return;
            }

            versionModulo(item, (err, version) => {
                if (err) {
                    callbackIterador(err);
                    return;
                }

                callbackIterador(null, {nombre: item, version: version});
            });
        }

        /*      PODEMOS SUPRIMIR LA FUNCIÓN DE CALLBACK (ver más abajo)
        async.concat(lista, iterador, (err, resultados) => {
            if (err) {
                callback(err);
                return;
            }

            callback(null, resultados);
        });
        */

        // devolvemos la lista de módulos
        async.concat(lista, iterador, callback);

    });
}


versionModulos ( (err, listaModulos) => {
    if (err) {
        console.error('Hubo un error', err);
        return;
    }

    // nos recorremos listaModulos para pintarlos en la consola
    // y como console.log no es asíncrono, podemos hacer un bucle
    for (let i = 0; i < listaModulos.length; i++) {
        console.log('El módulo', listaModulos[i].nombre, 'tiene la versión', listaModulos[i].version);
    }
});