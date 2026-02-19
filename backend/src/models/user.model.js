const { db } = require('../config/db');

const statements = {
	create: db.prepare(`
		INSERT INTO users (email, password, name)
		VALUES (@email, @password, @name)
	`),
	findByEmail: db.prepare(`
		SELECT id, email, password, name, role, created_at, updated_at
		FROM users
		WHERE email = ?
	`),
	findById: db.prepare(`
		SELECT id, email, password, name, role, created_at, updated_at
		FROM users
		WHERE id = ?
	`),
	findAll: db.prepare(`
		SELECT id, email, name, role, created_at, updated_at
		FROM users
		ORDER BY id ASC
	`),
	delete: db.prepare(`
		DELETE FROM users
		WHERE id = ?
	`),
};

function create(email, hashedPassword, name = null) {
	const result = statements.create.run({
		email,
		password: hashedPassword,
		name,
	});

	return findById(result.lastInsertRowid);
}

function findByEmail(email) {
	return statements.findByEmail.get(email) || null;
}

function findById(id) {
	return statements.findById.get(id) || null;
}

function findAll() {
	return statements.findAll.all();
}

function update(id, data) {
	const allowedKeys = ['email', 'password', 'name', 'role'];
	const fields = [];
	const values = [];

	for (const key of allowedKeys) {
		if (Object.prototype.hasOwnProperty.call(data, key)) {
			fields.push(`${key} = ?`);
			values.push(data[key]);
		}
	}

	if (fields.length === 0) {
		return findById(id);
	}

	fields.push('updated_at = CURRENT_TIMESTAMP');

	const statement = db.prepare(`
		UPDATE users
		SET ${fields.join(', ')}
		WHERE id = ?
	`);

	statement.run(...values, id);
	return findById(id);
}

function remove(id) {
	const result = statements.delete.run(id);
	return result.changes > 0;
}

module.exports = {
	create,
	findByEmail,
	findById,
	findAll,
	update,
	delete: remove,
};
