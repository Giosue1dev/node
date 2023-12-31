const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const port = 3000; 

app.use(express.json());

app.use('/api/v1', require('./routes/courseRoutes'));
app.use('/api/v1', require('./routes/typologyRoutes'));
app.use('/api/v1', require('./routes/universityRoutes'));

const connectToDB_string = process.env.DB_CONNECTION_STRING;

mongoose.connect(connectToDB_string, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => console.log(`Connected to database and listening on localhost:${port}!`));
  })
  .catch(err => console.error('Error while connecting.', err));