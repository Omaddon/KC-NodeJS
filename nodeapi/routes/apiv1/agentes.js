'use strict';

const express = require('express');
const router = express.Router();
// No sería necesario requerir el múdlo de Agente ya que
// podríamos recuperar el modelo con: 
// const Agente= require('mongoose').model('Agente')
const Agente = require('../../models/Agente');

// Cargamos nuestro módulo de autenticación con basic-auth
const basicAuth = require('../../lib/basicAuth');

router.use(basicAuth);

/*
router.use((req, res, next) => {
    if (req.query.password != '1234') {
        res.send({success: false, error: 'Necesitas autenticación'});
        return;
    }
    next();
});
*/

/* GET /apiv1/agentes */
// Con esto de abajo primero pasa por el primer middleware, y si le deja pasar, ejecuta el segundo
// router.get('/', basicAuth, (req, res, next) => {
router.get('/', (req, res, next) => {

    // Creamos el filtro vacío para pasarlo como parámetro
    const filter = {};

    const name = req.query.name;
    const age = req.query.age;
    const limit = parseInt(req.query.limit);
    const skip = parseInt(req.query.skip);
    const sort = req.query.sort;
    const fields = req.query.fields;    // con -age, quita dicho campo de la búsqueda
                                        // si se añaden 2 campos iguales a la búsqueda es un OR

    if (name) {
        filter.name = name;
    }

    if (typeof(age) != 'undefined'){
        filter.age = age;
    }

    Agente.list(filter, limit, skip, fields, sort, (err, agentes) => {
        if (err) {
            next(err);
            return;
        }   
        res.json({ success: true, result: agentes});
    });
});

/* POST /apiv1/agentes */
router.post('/', (req, res, next)=> {
    // Creamos un objeto de tipo Agente con los datos del req.body
    // console.log(req.body);
    const agente = new Agente(req.body);
    
    // Ahora lo guardamos ne la db
    agente.save((err, agenteGuardado) => {
        if (err) {
            next(err);
            return;
        }

        res.json({success: true, result: agenteGuardado});
    });
});

module.exports = router;