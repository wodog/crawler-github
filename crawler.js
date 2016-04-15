'use strict';

const request = require('request');
const cherrio = require('cheerio');

const Constant = require('./constant');

class Crawler {
    constructor() {

    }

    // 开始爬行
    exec() {
    	return new Promise((resolve, reject) => {
	        request({
	        	url: Constant.GITHUB_URL_DAILY,
	        	method: 'GET'
	        }, (err, res, body) => {
	        	if(err) {
	        		return reject(err);
	        	}
	        	resolve(this.parse_body(body));
	        });
    	});
    }
    
    // 解析body
    parse_body (body) {
    	let $ = cherrio.load(body);
    	let result = [];
    	$('#explore-trending ul li').each((index, element) => {
    		let node = {};
    		let item = $(element);
    		node.title = item.find('.repo-name').text();
    		node.url = item.find('.repo-name').attr('href');
    		node.describe = item.find('.repo-description').text();
    		result.push(node);
    	});
    	return result;
    }

}

module.exports =  Crawler;