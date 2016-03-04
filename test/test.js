'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('react-basic', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .on('end', done);
  });

  it('creates all files', function () {
    assert.file([
      'src/app.jsx',
      'index.html',
      'gulpfile.js',
      'package.json'
    ]);
  });
});