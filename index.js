#!/usr/bin/env node

const { exec } = require('child_process');
const fs = require('fs-extra');
const argv = require('minimist')(process.argv.slice(2));

const width = argv.width || 1024
const path = argv.path;
const outputloc = argv.outputloc || path + '/resized';
const files = fs.readdirSync(path);

files.forEach((file) => {
    exec(`convert ${path}/${file} -resize '${width}' -auto-orient -strip ${outputloc}/${file.split('.')[0]}.jpg`, (err, stdout, stderr) => {
        console.log(`Converted: ${file}`);
    });
});
