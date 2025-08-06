const fs = require('fs');

function readJSON(filePath) {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
}

module.exports = { readJSON };
