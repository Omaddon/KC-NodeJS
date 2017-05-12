'use strict';

const basicAuth = require('basic-auth');

module.exports = (req, res, next) => {
    const user = basicAuth(req);
    // console.log(user);

    // Lo lógico sería buscar en la db el user.name y comprobar la user.pass

    // El nombre del usuario y la pass que hemos introducido la primera vez
    if (!user || user.name !== 'admin' || user.pass !== '123456') {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Requiered');
        res.sendStatus(401);
        return;
    }

    next();
}