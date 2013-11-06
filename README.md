# grunt-rewrite

> A Grunt plugin to edit & replace file contents.

## Getting Started

This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the
[Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a
[Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once
you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-rewrite --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of
JavaScript:

```js
grunt.loadNpmTasks('grunt-rewrite');
```

## Example Gruntfile.js

```js
module.exports = function(grunt) {

  grunt.initConfig({

    rewrite: {
      quotes: {
        src: ['src/foo.txt', 'src/bar.txt'],
        editor: function(contents, filePath) {
          return contents.toUpperCase();
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-rewrite');

};
```
