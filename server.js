/**
 * Created by admin on 17/10/2016.
 */
(() => {
    'use strict';
    const http              = require('http');
    const mongoose          = require('mongoose');
    const express           = require('express');
    const bodyParser        = require('body-parser');

    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/human_resources', (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }

        console.log('Successfully connected to MongoDB');
        startServer();
    });

    // HTTP middleware based on express setup
    const app = express();
    app.use(bodyParser.json());

    app.use('/', express.static('./public'));
    app.use('/node_modules', express.static('./node_modules'));

    // APIs mapping
    app.use('/api', require('./api/api'));

    function startServer() {
        http.createServer(app).listen(8080, 'localhost', () => {
            console.log('Server listening at http://localhost:8080/');
        });
    }
})();
