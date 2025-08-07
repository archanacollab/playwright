const fs = require('fs');
const path = require('path');

function readJSON(relativePath) {
    const fullPath = path.join(__dirname, '..', relativePath); // adjust '..' if needed
    const rawData = fs.readFileSync(fullPath, 'utf-8');
    return JSON.parse(rawData);
}

module.exports = { readJSON };
