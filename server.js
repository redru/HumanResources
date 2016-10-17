/**
 * Created by admin on 17/10/2016.
 */
'use strict';
const http              = require('http');
const express           = require('express');
const bodyParser        = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use('/', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));

// APIs mapping
app.use('/api', require('./api/api'));

http.createServer(app).listen(8080, 'localhost', () => {
    console.log('Server listening at http://localhost:8080/');
});
