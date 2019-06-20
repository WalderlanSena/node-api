const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors);

mongoose.connect(
    'mongodb://localhost:27018/node-api', 
    { useNewUrlParser: true }
);

requireDir('./src/models/');

app.use('/api', require('./src/routes/routes'));

app.listen(3001);