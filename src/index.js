define(function(require) {

	let Vue = require('js/vue');
	let template = require("src/js/text.js!html/mainpage.html")
	let router = require("js/vue-router.min");

	require("components/leftbar");
	require("components/topmenu");
	require("components/customslider");
	require("components/aboutme");
	require("components/cloudtags");
	require("components/map");
	require("components/footer");

	new Vue({
		el : "#app",
		template: template,
		data() {
			return {
				"slideIndex" : 0
			};
		},
		methods: {
		},
		mounted() {
		}
	});
});