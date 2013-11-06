/*
 * grunt-rewrite
 * https://github.com/JamieMason/grunt-rewrite
 *
 * Copyright (c) 2013 Jamie Mason, @fold_left
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      all: [
        '<%= watch.develop.files %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    rewrite: {
      quotes: {
        src: 'README.md',
        editor: function(src) {
          return src.toUpperCase();
        }
      }
    },

    watch: {
      develop: {
        files: ['tasks/**/*.js', 'test/**/*.js'],
        tasks: ['test']
      }
    },

    jasmine_node: {
      projectRoot: '.',
      jUnit: {
        report: true,
        savePath: './junit/',
        useDotNotation: true,
        consolidate: true
      }
    }

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jasmine-node');

  grunt.registerTask('test', [
    'jasmine_node'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test'
  ]);

};
