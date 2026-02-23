/**
 * Fix missing commas before tags: lines.
 * Pattern: a line NOT ending with comma, followed by a tags: line
 */
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'src', 'data');

function findDataFiles(dir) {
    const results = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            results.push(...findDataFiles(fullPath));
        } else if (entry.name.endsWith('.ts') && !['universities.ts', 'index.ts', 'types.ts'].includes(entry.name)) {
            results.push(fullPath);
        }
    }
    return results;
}

const files = findDataFiles(DATA_DIR);
let totalFixed = 0;

for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');
    // Fix: line not ending with comma, followed by whitespace + tags:
    const fixed = content.replace(/([^,\n])\n(\s+tags:\s*\[)/g, '$1,\n$2');
    if (fixed !== content) {
        const count = (fixed.match(/,\n\s+tags:\s*\[/g) || []).length - (content.match(/,\n\s+tags:\s*\[/g) || []).length;
        fs.writeFileSync(file, fixed, 'utf-8');
        console.log(`✅ ${path.relative(DATA_DIR, file)}: fixed commas`);
        totalFixed++;
    }
}

console.log(`\n📊 Fixed ${totalFixed} files`);
