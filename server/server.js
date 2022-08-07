const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/api', (req, res) => {
  res.json({ name: 'adarsh' });
});

app.listen(PORT, () => {
  console.log('server running on PORT ', PORT);
});
