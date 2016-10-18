/**
 * Created by admin on 17/10/2016.
 */
(() => {
    'use strict';
    const router            = require('express').Router();
    const User              = require('../../models/User');

    router.post('/login', (req, res) => {
        let data = req.body.data;

        User.findOne({ username: data.username, password: data.password }, { username: 1, name: 1, surname: 1 }).then((user) => {
            if (!user) {
                return Promise.reject({ status: 403, message: 'Username o password errati' });
            }

            console.log('Login effettuato correttamente');
            return res.status(200).json({ message: 'Login effettuato correttamente', data: user.toObject() });
        }).catch((reason) => {
            console.error(reason);
            return res.status(reason.status ? reason.status : 500).json({ result: { message: reason.message ? reason.message : 'Errore durante la fase di login' } });
        });
    });

    router.post('/register', (req, res) => {
        let data = req.body.data;
        let user = new User(data);

        User.count({ username: user.username }).then((count) => {
            if (count != 0) {
                return Promise.reject({ status: 409, message: 'Utente ' + user.username + ' esistente. Impossibile completare la registrazione' });
            }

            return Promise.resolve();
        }).then(user.save).then(() => {
            console.log('Utente creato correttamente');
            return res.status(200).json({ result: { message: 'Utente creato correttamente' } });
        }).catch((reason) => {
            console.error(reason.message ? reason.message : reason);
            return res.status(reason.status ? reason.status : 500).json({ result: { message: reason.message ? reason.message : 'Errore durante la fase di registrazione' } });
        });
    });

    module.exports = router;
})();
