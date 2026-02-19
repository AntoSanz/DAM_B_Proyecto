const { db } = require('../config/db');

function findByCategoryId(categoryId) {
  return db
    .prepare(
      `
      SELECT
        id,
        category_id AS categoryId,
        name,
        short_description AS shortDescription,
        long_description AS longDescription,
        price,
        image,
        genre,
        developer,
        players,
        release_date AS releaseDate,
        in_stock AS inStock,
        rating
      FROM products
      WHERE category_id = ?
      ORDER BY id ASC
    `,
    )
    .all(categoryId)
    .map((product) => ({
      ...product,
      inStock: Boolean(product.inStock),
    }));
}

module.exports = {
  findByCategoryId,
};