define(function(require) {
	let Vue = require("js/vue");

	let template = require("src/js/text.js!html/topmenu.html");

	Vue.component("topmenu", {
		template : template,
		data() {
			return {
				"navmenu" : false
			};
		},
		methods : {
			scrollMeTo(refName) {
				var reqId = "#"+refName;
				window.scrollTo(0, $(reqId).offset().top-85);
			},
			showHide() {
				this.navmenu = !this.navmenu;
			}
		}
	});
});