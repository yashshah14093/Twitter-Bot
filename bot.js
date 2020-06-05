console.log("Hello, Bot is now working");

var Twit = require('twit');

var config = require('./config');
// console.log(config);

var auth = new Twit(config);