const fs = require('fs');
const path = require('path');

const root = process.cwd();
const targetDir = path.join(root, 'frontend', 'src');

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
      continue;
    }
    if (/\.(js|jsx)$/.test(entry.name)) out.push(full);
  }
}

function splitParams(raw) {
  const parts = [];
  let cur = '';
  let depthParen = 0;
  let depthBrace = 0;
  let depthBracket = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;

  for (let i = 0; i < raw.length; i += 1) {
    const ch = raw[i];
    const prev = i > 0 ? raw[i - 1] : '';

    if (inSingle) {
      cur += ch;
      if (ch === "'" && prev !== '\\') inSingle = false;
      continue;
    }
    if (inDouble) {
      cur += ch;
      if (ch === '"' && prev !== '\\') inDouble = false;
      continue;
    }
    if (inTemplate) {
      cur += ch;
      if (ch === '`' && prev !== '\\') inTemplate = false;
      continue;
    }

    if (ch === "'") {
      inSingle = true;
      cur += ch;
      continue;
    }
    if (ch === '"') {
      inDouble = true;
      cur += ch;
      continue;
    }
    if (ch === '`') {
      inTemplate = true;
      cur += ch;
      continue;
    }

    if (ch === '(') depthParen += 1;
    if (ch === ')') depthParen -= 1;
    if (ch === '{') depthBrace += 1;
    if (ch === '}') depthBrace -= 1;
    if (ch === '[') depthBracket += 1;
    if (ch === ']') depthBracket -= 1;

    if (ch === ',' && depthParen === 0 && depthBrace === 0 && depthBracket === 0) {
      parts.push(cur.trim());
      cur = '';
      continue;
    }

    cur += ch;
  }

  if (cur.trim()) parts.push(cur.trim());
  return parts.filter(Boolean);
}

function normalizeParamName(param, index) {
  let p = param.trim();
  if (!p) return `param${index + 1}`;

  if (p.startsWith('...')) p = p.slice(3).trim();

  const eqIdx = p.indexOf('=');
  if (eqIdx >= 0) p = p.slice(0, eqIdx).trim();

  if (p.startsWith('{') || p.startsWith('[')) {
    return `param${index + 1}`;
  }

  const colonIdx = p.indexOf(':');
  if (colonIdx >= 0) p = p.slice(0, colonIdx).trim();

  p = p.replace(/[^A-Za-z0-9_$]/g, '');
  if (!p) return `param${index + 1}`;
  return p;
}

function hasJsDocAbove(lines, idx) {
  let i = idx - 1;
  while (i >= 0 && lines[i].trim() === '') i -= 1;
  if (i < 0) return false;
  return lines[i].trim().endsWith('*/');
}

function makeDoc(indent, fnName, paramsRaw, isAsync) {
  const params = splitParams(paramsRaw || '');
  const returnType = isAsync ? 'Promise<any>' : 'any';

  const docLines = [
    `${indent}/**`,
    `${indent} * Descripcion breve de la funcion ${fnName}.`,
  ];

  params.forEach((p, i) => {
    const name = normalizeParamName(p, i);
    docLines.push(`${indent} * @param {any} ${name}`);
  });

  docLines.push(`${indent} * @returns {${returnType}}`);
  docLines.push(`${indent} */`);
  return docLines;
}

function transformFile(filePath) {
  const input = fs.readFileSync(filePath, 'utf8');
  const lines = input.split(/\r?\n/);
  const out = [];
  let changed = false;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];

    const functionMatch = line.match(/^(\s*)(?:export\s+)?(async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(([^)]*)\)/);
    const constArrowMatch = line.match(/^(\s*)(?:export\s+)?const\s+([A-Za-z_$][\w$]*)\s*=\s*(async\s*)?\(([^)]*)\)\s*=>/);

    if (functionMatch && !hasJsDocAbove(lines, i)) {
      const indent = functionMatch[1] || '';
      const isAsync = Boolean(functionMatch[2]);
      const fnName = functionMatch[3];
      const paramsRaw = functionMatch[4] || '';
      out.push(...makeDoc(indent, fnName, paramsRaw, isAsync));
      changed = true;
    } else if (constArrowMatch && !hasJsDocAbove(lines, i)) {
      const indent = constArrowMatch[1] || '';
      const fnName = constArrowMatch[2];
      const isAsync = Boolean(constArrowMatch[3]);
      const paramsRaw = constArrowMatch[4] || '';
      out.push(...makeDoc(indent, fnName, paramsRaw, isAsync));
      changed = true;
    }

    out.push(line);
  }

  if (changed) {
    fs.writeFileSync(filePath, out.join('\n'), 'utf8');
  }

  return changed;
}

const files = [];
walk(targetDir, files);
let changedCount = 0;
for (const file of files) {
  if (transformFile(file)) changedCount += 1;
}

console.log(`Updated files: ${changedCount}`);
