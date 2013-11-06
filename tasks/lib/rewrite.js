'use strict';

/**
 * Return the named dependency or throw an error that it is absent.
 * @param  {Object} deps
 * @param  {String} name
 * @throws {Error}
 * @return {Mixed}
 */

function dependency(deps, name) {
  if (name in deps && typeof deps[name] !== 'undefined') {
    return deps[name];
  }
  throw new Error('grunt-rewrite.registerTask requires dependency "' + name + '"');
}

module.exports = {

  /**
   * Improve testability by allowing mock dependencies to be passed into the task.
   * @param  {Object} deps.grunt
   * @param  {Object} deps.task
   */

  registerTask: function(deps) {

    deps = deps || {};

    var grunt = dependency(deps, 'grunt');
    var task = dependency(deps, 'task');
    var done = task.async();

    task.files.forEach(function(subTask) {

      // make sure an editing function has been provided

      if (typeof subTask.editor !== 'function') {
        return grunt.fatal(task.current.nameArgs + ' needs a ".editor" method');
      }

      // replace contents of each file with the return value
      // of the editor when given the file's contents and path.

      subTask.src.forEach(function(filePath) {

        if (!grunt.file.isFile(filePath)) {
          return grunt.log.write('skipped "' + filePath + '" as is not a file');
        }

        var original = grunt.file.read(filePath);
        var rewritten = subTask.editor(original, filePath);

        if (typeof rewritten === 'undefined') {
          return grunt.fatal(task.current.nameArgs + ' ".editor" method did not return a value');
        }

        grunt.file.write(filePath, rewritten);

      });

    });

    done();

  }

};
