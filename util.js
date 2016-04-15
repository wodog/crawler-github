'use strict';

const nodemailer = require('nodemailer');

const Constant = require('./constant');

class Util {
	static sendMail(data) {
		let transporter = nodemailer.createTransport({
			host: Constant.HOST,
			port: Constant.PORT,
			secure: Constant.SECURE,
			auth: {
				user: process.env.user,
				pass: process.env.pass
			}
		});


		let html = '';
		data.forEach(item => {
			html += `<dl><dt>${item.title}</dt><dd>${item.url}</dd><dd>${item.describe}</dd></dl>`
		});

		transporter.sendMail({
			from: Constant.FROM,
			to: Constant.TO,
			subject: Constant.SUBJECT,
			html: html
		}, (err, info) => {
			if(err) {
				return console.log(err);
			}
			console.log('Message sent: ' + info.response);			
		})
	}
}

module.exports = Util;