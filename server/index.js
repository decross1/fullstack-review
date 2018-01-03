const express = require('express');
let app = express();
let github = require('../helpers/github.js');
let bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  console.log('Post Received')
  console.log('Req body: ', req.body);
  var username = req.body.username;
  res.sendStatus(200);
  github.getReposByUsername(username);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

