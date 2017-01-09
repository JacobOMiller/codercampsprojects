#!/usr/bin/env node
'use strict';

const spawn = require ('child_process').spawn;
const ls = spawn ('ls', ['-lh', '/usr']);

console.log ('- Setting up the fullstack environment...');

ls.stdout.on ('data', (data) => {
  console.log (`stdout: ${data}`);
});

ls.stderr.on ('data', (data) => {
  console.log (`stderr: ${data}`);
});

ls.on ('close', (code) => {
  console.log (`child process exited with code ${code}`);
});


class Terminal {
    constructor () {}
}
