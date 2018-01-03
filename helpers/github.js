const request = require('request-promise');
const config = require('../config.js');
// const promise = require('bluebird');

let getReposByUsername = (username) => {
  var username = username;
  console.log('github queried with:', username);
  console.log('github username location:', `https://api.github.com/users/${username}/repos`)
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    method: 'GET', 
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options)
  .then(function (res) {
    console.log('request was sent, and successful');
    console.log('response is:', res);
  })

  .catch(function (err) {
    console.log('there was an error,', error);
  });

}

module.exports.getReposByUsername = getReposByUsername;