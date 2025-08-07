const fs = require('fs');
const path = require('path');

function readJSON(relativePathFromParent) {
    const parentDir = path.resolve(__dirname, '..'); 
    const fullPath = path.join(parentDir, relativePathFromParent); 
    if (!fs.existsSync(fullPath)) {
        throw new Error(`File not found: ${fullPath}`);
    }
    const rawData = fs.readFileSync(fullPath, 'utf-8');
    return JSON.parse(rawData);
}

module.exports = { readJSON };
