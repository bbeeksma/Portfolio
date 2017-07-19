'use strict';

const express = require('express');
const PORT = 3000;
const app = express();

app.use(express.static('./public'));

app.get('*', function(request, response){
  response.status(404).send('404 Page not found');
});

app.listen(PORT, function() {
  console.log('express is listening on port ' + PORT);
});
