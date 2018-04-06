module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: '\n'
			},
			customTheme: {
				src: [
					'css/partials/*.less'
				],
				dest: 'css/main-theme.less'
			},
			vuefiles: {
				src: [
					'src/vue-function.js',
					'src/components/*.js'
				],
				dest: 'js/applicationScripts-vue.js'
			}
		},
		less : {
			dist :{
				files: {
					"css/main-theme.css": "css/main-theme.less"
				}				
			}
		},
		watch: {
			files: [ 'src/vue-function.js', 'src/components/*.js', 'css/partials/*.less'],
			tasks: [ 'concat', 'less' ]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('default', [ 'concat', 'less' ]);
};
