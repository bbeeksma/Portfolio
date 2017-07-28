'use strict';

const express = require('express');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const exp = express();

exp.use(express.static('./public'));

const githubToken = process.env.GITHUB_TOKEN;

function proxyGitHub(request, response){
  console.log(`Routing GitHub request for ${request.params[0]}`);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: { Authorization: `token ${githubToken}`}
  }))(request, response);
}

exp.get('/github/*', proxyGitHub);
exp.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));

exp.listen(PORT, function() {
  console.log('express is listening on port ' + PORT);
});
