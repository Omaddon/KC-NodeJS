'use strict';

// patron factory
// al crear closure capturamos el contexto del this y no perderlo
function creaAgente(nombre) {
    return {
        getNombre: function() {
            return nombre;
        },
        setNombre: function(valor){
            nombre = valor;
        },
        saluda: function(){
            console.log('Hola soy', nombre);
        }
    };
}


// creamos Agentes
const jones = creaAgente('Jones');
jones.saluda();

const brown = creaAgente('Brown');
brown.saluda();

setTimeout(brown.saluda, 2000);