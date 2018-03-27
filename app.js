const express = require('express');
const bodyParser = require('body-parser');
const shell = require('shelljs');

const app = express();

app.use(bodyParser.json({limit: '1024kb'}));

app.get('/', (req, res) => {
  res.send('fg2s is running!');
});

app.post('/', (req, res) => {
  const body = req.body || {};

});

app.listen(1993, () => {
  console.log('fg2s listening on port 1993!');
});
