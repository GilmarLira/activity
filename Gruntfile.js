module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: 'build/js/scripts/*.js',
                dest: 'build/js/scripts.js'
            },
			push: {
            	src: 'build/js/scripts.js',
				dest: 'www/js/scripts.js',
			}
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'www/css/style.css': 'build/scss/style.scss'
                }
            }
        },

        watch: {
            frontend: {
                options: {
                    livereload: true,
                },
                files: [
                    'www/js/*.js',
                    'www/css/style.css',
                    'www/*.php',
                    'www/*.tpl',
                    'www/*.html',
                ]
            },
            scripts: {
                files: 'build/js/scripts/*.js',
                tasks: ['concat']
            },
            css: {
                files: [
                    'build/scss/globals/*.scss',
                    'build/scss/partials/*.scss',
                    'build/scss/*.scss'
                ],
                tasks: ['sass']
            }
        }
    });


    // 2. Where we tell Grunt we plan to use these plug-ins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');


    // 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'sass', 'watch']);

};
