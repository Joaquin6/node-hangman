'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.route(app);

module.exports = app;
