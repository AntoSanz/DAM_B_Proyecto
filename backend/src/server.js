const { initializeDatabase } = require('./config/db');
const app = require('./app');
const PORT = process.env.PORT || 3000;

initializeDatabase();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});