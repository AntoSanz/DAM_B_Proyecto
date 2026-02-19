const { db } = require('../config/db');

function findAll() {
  return db
    .prepare(
      `
      SELECT id, name, description
      FROM categories
      ORDER BY id ASC
    `,
    )
    .all();
}

module.exports = {
  findAll,
};