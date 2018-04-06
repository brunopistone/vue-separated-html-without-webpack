define(function(require) {
	let Vue = require("js/vue");
	require("components/slider");
	require("components/slider-item");

	let template = require("src/js/text.js!html/customslider.html");

	Vue.component("customslider", {
		template : template,
		data() {
			return {
				"list" : [
					{
						"src" : "src/img/code.jpg",
						"title" : "Software Developer",
						"content" : "I have a large interest in programming and I love to apply my skills to my personal projects. Fond of data engineering, full stack development and machine learning" 
					},
					{
						"src" : "src/img/calcio.jpg",
						"title" : "Sport fun",
						"content" : "I played football since I was 5 years old to 18. Actually I'm a follower of football, tennis and basket"
					},
					{
						"src" : "src/img/collage.png",
						"title" : "Life lover",
						"content" : "I spend my free time with my friends, that are really my life. I like going out to know new people, drink gin tonics and have fun"
					}
				]
			}
		}
	});
});