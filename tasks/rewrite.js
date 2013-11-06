/*
 * grunt-rewrite
 * https://github.com/JamieMason/grunt-rewrite
 *
 * Copyright (c) 2013 Jamie Mason, @fold_left
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  'use strict';

  grunt.registerMultiTask('rewrite', 'A Grunt plugin to edit & replace file contents.', function() {
    require('./lib/rewrite').registerTask({
      grunt: grunt,
      task: this
    });
  });

};
