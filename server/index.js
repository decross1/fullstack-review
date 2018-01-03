const express = require('express');
let app = express();
let github = require('../helpers/github.js');
let bodyParser = require('body-parser');
let db = require('../database');

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
  db.Repo.find().sort({forks_count: -1}).limit(25).exec()
  .then((repos) => {
    console.log('Retrieving repos from DB: ', repos);
    res.status(200).send(repos);
  })

});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

