require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {isValidInteger} = require('./utils');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/ping', async (req, res) => {
  try {
    const [result] = await db.ping();
    return res.json(result[0]);
  } catch (error) {
    console.log(error);
  }
});

app.get('/', (req, res) => {
  res.send('Hi');
});

app.get('/values/all', async (req, res) => {
  try {
    const values = await db.getAllValues();
    res.send(values);
  } catch (error) {
    console.error('Error retrieving values:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/values', async (req, res) => {
  const {value} = req.body;

  if (!isValidInteger(value)) {
    res.status(400).send({error: 'Invalid input'});
    return;
  }

  try {
    await db.insertValue(value);
    res.send({working: true});
  } catch (error) {
    console.error('Error inserting value:', error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.NODE_LOCAL_PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running\nhttp://localhost:${PORT}`);
});
