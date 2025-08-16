const fs = require('fs');
const path = require('path');

function readJSON(relativePathFromParent) {
  const repoRoot = process.cwd();
    const fullPath = path.join(repoRoot, relativePathFromParent); 
    if (!fs.existsSync(fullPath)) {
        throw new Error(`File not found: ${fullPath}`);
    }
    const rawData = fs.readFileSync(fullPath, 'utf-8');
    return JSON.parse(rawData);
}
module.exports = { readJSON };
