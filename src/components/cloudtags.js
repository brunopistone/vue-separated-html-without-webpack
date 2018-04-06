define(function(require) {
    let Vue = require("js/vue");

    let template = require("src/js/text.js!html/cloudtags.html");

    Vue.component("cloudtags", {
        template : template
    });
});