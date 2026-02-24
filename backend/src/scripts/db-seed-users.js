const fs = require('fs');
const path = require('path');

const seedPath = path.resolve(__dirname, '../../database/seeds/users.seed.sql');

if (!fs.existsSync(seedPath)) {
  throw new Error(`No se encontró el archivo seed: ${seedPath}`);
}

const { initializeDatabase, db } = require('../config/db');

initializeDatabase();

const sql = fs.readFileSync(seedPath, 'utf8');
db.exec(sql);

const users = db.prepare('SELECT COUNT(*) AS total FROM users').get().total;
console.log('Seed de usuarios aplicado correctamente.');
console.log(`Usuarios totales: ${users}`);
