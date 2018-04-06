define(function(require) {
	let Vue = require("js/vue");

	let template = require("src/js/text.js!html/footer.html");

	Vue.component("endfooter", {
		template : template
	});
});