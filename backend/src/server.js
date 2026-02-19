const express = require('express');
const { initializeDatabase } = require('./config/db');

initializeDatabase();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ ok: true, message: 'Backend running' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});