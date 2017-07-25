'use strict';

const express = require('express');
const PORT = 3000;
const exp = express();

exp.use(express.static('./public'));

exp.get('/', (request, response) => response.sendFile('index.html', {root: './public'}));
exp.get('/portfolio', (request, response) => response.sendFile('index.html', {root: './public'}));
exp.get('/about', (request, response) => response.sendFile('index.html', {root: './public'}));

exp.listen(PORT, function() {
  console.log('express is listening on port ' + PORT);
});
