#!/usr/bin/env node
var volumes = require('volumes');
var program = require('commander');
var updateNotifier = require('update-notifier');
var pkg = require('./package.json');

updateNotifier({pkg}).notify();
program
.option('-s, --set <set>', 'Set volume.')
.option('-i, --increase <increase>', 'Increase volume.')
.option('-d, --decrease <decrease>', 'Decrease volume.')
.parse(process.argv);

if (program.set && !program.increase && !program.decrease) {
  volumes.set(program.set).then(function(response) {
    console.log(response);
  });
}
if (program.increase && !program.set && !program.decrease) {
  volumes.increase(program.increase).then(function(response) {
    console.log(response);
  });
}
if (program.decrease && !program.set && !program.increase) {
  volumes.decrease(program.decrease).then(function(response) {
    console.log(response);
  });
}
