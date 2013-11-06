# grunt-rewrite

> A Grunt plugin to edit & replace file contents.

grunt-rewrite takes one or more files and a function which when given the contents and path of a file, should return new content to be written to that file.

Imagine you have a file at `src/languages.json` and you want to mess with it.

```json
[{
  "name": "Javanese",
  "description": "Javanese is the language of the Javanese people from the central and eastern parts of the island of Java, in Indonesia. There are also pockets of Javanese speakers in the northern coast of western Java. It is the native language of more than 75,500,000 people (more than 30% of total population in Indonesia)."
}]
```

You set your `Gruntfile.js` up like so;

```js
module.exports = function(grunt) {

  grunt.initConfig({

    rewrite: {
      quotes: {
        src: 'src/languages.json',
        editor: function(contents, filePath) {
          return contents.replace(/Javanese/g, 'JavaScript');
        }
      }
    },

  });

  grunt.loadNpmTasks('grunt-rewrite');

};
```

and `src/languages.json` now reads as follows;

```json
[{
  "name": "JavaScript",
  "description": "JavaScript is the language of the JavaScript people from the central and eastern parts of the island of Java, in Indonesia. There are also pockets of JavaScript speakers in the northern coast of western Java. It is the native language of more than 75,500,000 people (more than 30% of total population in Indonesia)."
}]
```

## Getting Started

This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-rewrite --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-rewrite');
```

## Configuration

Any valid value for `src` in the Grunt documentation is valid here, some examples;

```js
rewrite: {
  oneFile: {
    src: 'src/foo.txt',
    editor: function(contents, filePath) {
      return '/* ' + filePath + ' */\n\n' + contents;
    }
  },
  arrayOfFiles: {
    src: ['src/foo.txt', 'src/bar.txt'],
    editor: function(contents, filePath) {
      return contents.toUpperCase();
    }
  },
  patternMatch: {
    src: '**/*.js',
    editor: function(contents, filePath) {
      return contents.toUpperCase();
    }
  }
}
```
