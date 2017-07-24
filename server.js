'use strict';

const express = require('express');
const PORT = 3000;
const exp = express();

exp.use(express.static('./public'));

exp.get('*', function(request, response){
  response.status(404).send('404 Page not found');
});

exp.listen(PORT, function() {
  console.log('express is listening on port ' + PORT);
});
