'use strict';

const Crawler = require('./crawler');


var start = function() {
	new Crawler().exec().then(data => {
		console.log(data);
	});
};


setInterval(start, 20000);