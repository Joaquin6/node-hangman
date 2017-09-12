'use strict';

const os = require('os');
const colors = require('colors');
const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug');
const router = require('./routes');

const app = express();
const log = debug('hangman:app');

function setupEnvironment() {
	app.set('port', 9090);
	app.set('view engine', 'pug');
	app.set('views', __dirname + '/views');

	app.use('/public', express.static(__dirname + '/public'));
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	router.route(app);
}

function listen() {
	const appPort = app.get('port');
	app.listen(appPort, err => {
		if (err) throw err;
		log('\t-------- Node Configurations ---------');
		log('\tNode Environment: %s', colors.green(app.get('env')));
		log('\tNode Started On Port: %d', appPort);
		log('\tNode Process ID (pid): %d', process.pid);
		log('\tNode Version: %s', process.version);
		log('\t--------- OS Configurations ---------');
		log('\tOS Type is %s and Platform is %s', os.type(), os.platform());
		log('\tOS Memory %s and Available Memory is %s', colors.green(os.totalmem()), colors.green(os.freemem()));
		process.stdout.write(`The server is running, visit http://localhost:9090.${os.EOL}`);
	});
}

setupEnvironment();
listen();

module.exports = app;
