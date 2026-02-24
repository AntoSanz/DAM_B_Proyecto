const express = require('express');
const cors = require('cors');

const healthRoutes = require('./routes/health.routes');
const catalogRoutes = require('./routes/catalog.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', healthRoutes);
app.use('/api', catalogRoutes);
app.use('/api', authRoutes);

module.exports = app;