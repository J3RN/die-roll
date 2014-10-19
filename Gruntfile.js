'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: ['js/*', 'index.html'],
      tasks: ['jshint'],
      options: {
        livereload: true
      }
    },
    connect: {
      server: {
        options: {
          livereload: true
        }
      }
    },
    jshint: {
      all: ["js/cube.js"]
    }
  })

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint', 'connect', 'watch']);
}
