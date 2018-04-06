define(function(require) {
	let Vue = require("js/vue");

	let template = require("src/js/text.js!html/map.html");

	Vue.component("googlemap", {
		template : template,
		name : "googlemap",
		data() {
			return {
				mapName: this.name + "-map"
			};
		},
		mounted: function () {
			const element = document.getElementById(this.mapName)
			const options = {
				zoom: 14,
				center: new google.maps.LatLng(45.4641013,9.1897378)
			}
			const map = new google.maps.Map(element, options);
		}
	});
});