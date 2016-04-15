'use strict';

const Crawler = require('./crawler');
const Util = require('./util');


var start = function() {
	new Crawler().exec().then(data => {
		console.log(process.env.user);
		Util.sendMail(data);
	});
};


// setInterval(start, 60000);
start();