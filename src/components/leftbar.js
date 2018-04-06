define(function(require) {
	let Vue = require("js/vue");

	let template = require("src/js/text.js!html/leftbar.html");

	Vue.component("leftbar", {
		template : template,
		data() {
			return {
				isVisible : true
			};
		},
		methods : {
			scrollMeTo(refName) {
				var reqId = "#"+refName;
				window.scrollTo(0, $(reqId).offset().top-85);
			}
		}
	});
});