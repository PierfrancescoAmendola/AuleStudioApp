/**
 * Script to auto-generate tags for all study rooms that don't have them.
 * Run with: node scripts/add-tags.js
 * 
 * Strategy: Parse each .ts data file, find rooms without tags, generate tags
 * from existing fields (nome, servizi, edificio, university, indirizzo), and
 * insert the tags line after the notes or occupancy_rate line.
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'src', 'data');

// Recursively find all .ts files in data directory (excluding universities.ts, types, index)
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

function generateTags(room) {
    const tags = [];
    const nome = room.nome || '';
    const servizi = room.servizi || [];
    const edificio = room.edificio || '';
    const university = room.university || '';
    const indirizzo = room.indirizzo || '';
    const nomeLC = nome.toLowerCase();
    const edificioLC = edificio.toLowerCase();
    const serviziLC = servizi.map(s => s.toLowerCase());
    const allText = (nome + ' ' + edificio + ' ' + servizi.join(' ') + ' ' + university + ' ' + indirizzo).toLowerCase();

    // Type tags
    if (nomeLC.includes('biblioteca') || nomeLC.includes('biblio')) tags.push('Biblioteca');
    else if (nomeLC.includes('aula studio') || nomeLC.includes('aule studio') || nomeLC.includes('sala studio')) tags.push('Aula Studio');
    else if (nomeLC.includes('sala lettura') || nomeLC.includes('sale lettura')) tags.push('Sala Lettura');
    else if (nomeLC.includes('laboratori') || nomeLC.includes('lab ')) tags.push('Laboratorio');
    else if (nomeLC.includes('mensa') || nomeLC.includes('refettorio')) tags.push('Mensa/Ristoro');
    else if (nomeLC.includes('outdoor') || nomeLC.includes('aperto') || nomeLC.includes('giardino') || nomeLC.includes('parco') || nomeLC.includes('pineta') || nomeLC.includes('chiostro')) tags.push('Outdoor');
    else tags.push('Aula Studio');

    // Location/campus tags
    if (allText.includes('campus') || allText.includes('polo')) tags.push('Campus');
    if (allText.includes('centro storico') || allText.includes('centro città') || allText.includes('pieno centro')) tags.push('Centro');
    if (allText.includes('ospedale') || allText.includes('policlinico') || allText.includes('medicina')) tags.push('Medicina');

    // Service-based tags
    if (serviziLC.some(s => s.includes('wifi') || s.includes('eduroam'))) tags.push('WiFi');
    if (serviziLC.some(s => s.includes('pres') && (s.includes('elettr') || s.includes('pc') || s.includes('cablat')))) tags.push('⚡ Prese');
    if (serviziLC.some(s => s.includes('aria condizionata') || s.includes('ac') || s.includes('climatizz'))) tags.push('❄️ Climatizzato');
    if (serviziLC.some(s => s.includes('h24') || s.includes('24h')) || nome.includes('H24')) tags.push('🌙 H24');
    if (serviziLC.some(s => s.includes('mensa') || s.includes('caffetteria') || s.includes('bar'))) tags.push('☕ Ristoro');
    if (serviziLC.some(s => s.includes('parcheggio'))) tags.push('🅿️ Parcheggio');
    if (serviziLC.some(s => s.includes('silenzio'))) tags.push('🔇 Silenzio');
    if (serviziLC.some(s => s.includes('group') || s.includes('gruppo'))) tags.push('👥 Gruppi OK');
    if (serviziLC.some(s => s.includes('stampante') || s.includes('fotocopie'))) tags.push('🖨️ Stampa');

    return tags;
}

// Parse room objects from file content using regex
function parseRooms(content) {
    const rooms = [];
    // Match objects with id field
    const idRegex = /id:\s*'([^']+)'/g;
    let match;
    while ((match = idRegex.exec(content)) !== null) {
        const id = match[1];
        const startIdx = content.lastIndexOf('{', match.index);

        // Find the nome
        const nomeMatch = content.substring(startIdx).match(/nome:\s*'([^']*(?:\\'[^']*)*)'/);
        const servMatch = content.substring(startIdx).match(/servizi:\s*\[([^\]]*)\]/);
        const edifMatch = content.substring(startIdx).match(/edificio:\s*'([^']*(?:\\'[^']*)*)'/);
        const uniMatch = content.substring(startIdx).match(/university:\s*'([^']*(?:\\'[^']*)*)'/);
        const indMatch = content.substring(startIdx).match(/indirizzo:\s*'([^']*(?:\\'[^']*)*)'/);
        const tagsMatch = content.substring(startIdx, startIdx + 800).match(/tags:\s*\[/);

        rooms.push({
            id,
            nome: nomeMatch ? nomeMatch[1] : '',
            servizi: servMatch ? servMatch[1].split(',').map(s => s.trim().replace(/'/g, '')) : [],
            edificio: edifMatch ? edifMatch[1] : '',
            university: uniMatch ? uniMatch[1] : '',
            indirizzo: indMatch ? indMatch[1] : '',
            hasTags: !!tagsMatch,
            position: match.index,
        });
    }
    return rooms;
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    const rooms = parseRooms(content);
    const roomsWithoutTags = rooms.filter(r => !r.hasTags);

    if (roomsWithoutTags.length === 0) {
        return { file: path.relative(DATA_DIR, filePath), modified: 0, total: rooms.length };
    }

    let modified = 0;

    // Process in reverse order to maintain positions
    for (const room of roomsWithoutTags.reverse()) {
        const tags = generateTags(room);
        if (tags.length === 0) continue;

        const tagsStr = tags.map(t => `'${t}'`).join(', ');
        const tagLine = `        tags: [${tagsStr}],`;

        // Find where to insert: after notes line or after occupancy_rate or after university
        const roomStart = content.lastIndexOf('{', room.position);
        // Find the closing brace of this room object
        let braceCount = 0;
        let roomEnd = roomStart;
        for (let i = roomStart; i < content.length; i++) {
            if (content[i] === '{') braceCount++;
            if (content[i] === '}') braceCount--;
            if (braceCount === 0) { roomEnd = i; break; }
        }

        const roomContent = content.substring(roomStart, roomEnd + 1);

        // Try to insert after notes line
        let insertAfter = roomContent.match(/notes:.*\n/);
        if (!insertAfter) {
            insertAfter = roomContent.match(/occupancy_rate:.*\n/);
        }
        if (!insertAfter) {
            insertAfter = roomContent.match(/university:.*\n/);
        }

        if (insertAfter) {
            const insertPos = roomStart + insertAfter.index + insertAfter[0].length;
            content = content.substring(0, insertPos) + tagLine + '\n' + content.substring(insertPos);
            modified++;
        }
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    return { file: path.relative(DATA_DIR, filePath), modified, total: rooms.length };
}

// Main
const files = findDataFiles(DATA_DIR);
console.log(`Found ${files.length} data files\n`);

let totalModified = 0;
let totalRooms = 0;
const results = [];

for (const file of files) {
    try {
        const result = processFile(file);
        results.push(result);
        totalModified += result.modified;
        totalRooms += result.total;
        if (result.modified > 0) {
            console.log(`✅ ${result.file}: ${result.modified}/${result.total} rooms tagged`);
        }
    } catch (err) {
        console.error(`❌ ${path.relative(DATA_DIR, file)}: ${err.message}`);
    }
}

console.log(`\n📊 Summary: ${totalModified} rooms tagged across ${results.filter(r => r.modified > 0).length} files (${totalRooms} total rooms)`);
