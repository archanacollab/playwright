const fs = require('fs');
const path = require('path');

function readJSON(relativePathFromParent) {
  //const repoRoot = process.cwd();
    //const fullPath = path.join(repoRoot, relativePathFromParent); 
    if (!fs.existsSync(relativePathFromParent)) {
        throw new Error(`File not found: ${relativePathFromParent}`);
    }
    const rawData = fs.readFileSync(relativePathFromParent, 'utf-8');
    return JSON.parse(rawData);
}
module.exports = { readJSON };
