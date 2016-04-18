'use strict';

const Crawler = require('./crawler');


var start = function() {
	new Crawler().exec().then(data => {
		console.log(data);
	});
};


setInterval(start, 24 * 60 * 60 * 1000);