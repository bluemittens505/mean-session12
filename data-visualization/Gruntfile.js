module.exports = function(grunt) {

    grunt.initConfig({ pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    sourcemap: 'auto',
                    style: 'expanded'
                },
                files: {
                    'css/graphstyles.css': 'css/graphstyles.scss'
                }
            }
        },
        clean: ['svg_icons/compressed', 'svg_icons/output'],
        svgmin: {
            options: {
                plugins: [
                { removeViewBox: false },
                { removeUselessStrokeAndFill: false }
                ]
            },
            dist: {
                expand: true,
                cwd: 'svgicons/raw',
                src: ['*.svg'],
                dest: 'svgicons/compressed',
                ext: '.comp.svg'
            }
        },
        grunticon: {
            myIcons: {
                files: [{
                    expand: true,
                    cwd: 'svgicons/compressed',
                    src: ['*.svg', '*.png'],
                    dest: 'css/icons'
                }],
                options: {
                    loadersnippet: "grunticon.loader.js",
                }
            }
        },
        watch: {
            options: {

            },
            css: {
                files: ['css/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        }
    });

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-svgmin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-grunticon');
grunt.loadNpmTasks('grunt-contrib-clean');


grunt.registerTask('default', ['sass', 'clean', 'grunticon:myIcons', 'svgmin', 'watch']);

};



















