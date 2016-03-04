'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    prompting: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the majestic ' + chalk.red('generator-react-basic') + ' generator!'
        ));

        this.prompt({
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname // Default to current folder name
        }, function(answers) {
            this.log(answers.name);
            done();
        }.bind(this));
    },

    writing: function() {
        this.fs.copy(
            this.templatePath(),
            this.destinationPath()
        );
    },

    install: function() {
        this.npmInstall();
    },

    end: function () {
        this.log(yosay(
            "Type 'gulp' to start..."
        ));
    }
});
