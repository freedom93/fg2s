const express = require('express');
const bodyParser = require('body-parser');
const shell = require('shelljs');

const _APP_ = express();
const _PORT_ = 1993;

_APP_.use(bodyParser.json({limit: '1024kb'}));

_APP_.get('/', (req, res) => {
  res.send('fg2s is running!');
});

_APP_.post('/', (req, res) => {
  console.log('req=====\n', req);
  console.log('res=====\n', res);

});

_APP_.listen(_PORT_, () => {

  console.log('fg2s listening on port: %s', _PORT_);
});
