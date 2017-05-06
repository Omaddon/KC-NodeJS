'use strict';

const EventEmitter = require('events');

// creamos un emisor de eventos
const emisor = new EventEmitter();

function suenaTelefono(quien){
    if (quien === 'madre') {
        return;
    }
    console.log('ring ring...');
}

function vibrarTelefono(){
    console.log('brr brr');
}

// nos suscribimos a los eventos
emisor.on('llamada telefono', suenaTelefono);
emisor.once('llamada telefono', vibrarTelefono);

// emitimos el evento
emisor.emit('llamada telefono', 'madre');
emisor.emit('llamada telefono', 'madre');
emisor.emit('llamada telefono', 'amigo');
emisor.emit('llamada telefono');