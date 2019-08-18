module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/variable.css': 'scss/variable.scss',
					'css/items.css': 'scss/items.scss',
					'css/page-section.css': 'scss/page-section.scss',
					// 'css/book-detail.css': 'scss/book-detail.scss',
					// 'css/cart.css': 'scss/cart.scss',
				}
			}
		},
		cssmin: {
			options: {
				mergeIntoShorthands: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'dist/style.min.css': ['css/*.css']
				}
			}
		},
		uglify: {
			options: {
				compress: true
			},
			build: {
				src: ['js/controllers/*.js'],
				dest: 'dist/controller.min.js'
			}
		},
		watch: {
			css: {
				files: ['scss/*.scss'],
				tasks: ['sass:dev'],
			},
			js: {
				files: ['js/controllers/*.js'],
				tasks: ['uglify:dev'],
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'uglify', 'cssmin']);

};