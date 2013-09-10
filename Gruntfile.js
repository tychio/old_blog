module.exports = function (grunt) {
    grunt.initConfig({
        stylus: {
            complie: {
                options: {
                    linenos: false,
                    compress: true,
                    banner: '\/* Tychio [code@tychio.net]\n * 2013.9.10\n *\/\n'
                },
                files: {
                    'css/style.css': 'css/style.styl'
                }
            }
        },
        watch: {
            css: {
                files: "css/style.styl",
                tasks: "stylus"
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['stylus', 'watch']);
};