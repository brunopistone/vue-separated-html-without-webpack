define(function(require) {
	let Vue = require("js/vue");
	let template = require("src/js/text.js!html/aboutme.html");
	
	Vue.component("aboutme", {
		template : template
	});
});