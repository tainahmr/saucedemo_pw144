const fs = require('fs');
const parse = require('csv-parse/sync').parse;

function lerCsv(caminho) {
    const conteudo = fs.readFileSync(caminho, 'utf-8');
    const registros = parse(conteudo, {
        columns: true,
        skip_empty_lines: true
    });
    return registros;
}

module.exports = { lerCsv }