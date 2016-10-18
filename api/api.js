/**
 * Created by admin on 17/10/2016.
 */
(() => {
    'use strict';
    const router            = require('express').Router();

    router.use((req, res, next) => {
        console.log(req.method + ' - ' + req.originalUrl);
        return next();
    });

    router.use('/authentication', require('./authentication/authentication-api'));
    console.log('Mapped API /authentication');

    module.exports = router;
})();
