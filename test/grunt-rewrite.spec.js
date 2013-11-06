describe('grunt-rewrite', function() {

  'use strict';

  // additional matchers for Jasmine
  require('jasmine-expect');

  beforeEach(function() {
    this.lib = require('../tasks/lib/rewrite');
  });

  it('should be a module', function() {
    expect(this.lib).toBeObject();
  });

  describe('registerTask', function() {

    it('should be a method', function() {
      expect(this.lib.registerTask).toBeFunction();
    });

  });

});
