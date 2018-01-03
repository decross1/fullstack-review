const request = require('request-promise');
const config = require('../config.js');
const database = require('../database');

let getReposByUsername = (username) => {
  var username = username;
  console.log('github queried with:', username);
  console.log('github username location:', `https://api.github.com/users/${username}/repos`)

  let options = {
    uri: `https://api.github.com/users/${username}/repos`,
    qs: {
        access_token: `${config.TOKEN}`
    },
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true
  };

  request(options)
  .then(function (repos) {
    console.log('request was sent, and successful');
    console.log('user has %d repos', repos.length);
    for (var repo of repos) {
      var newRepo = {
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name, 
        owner: {
          login: repo.owner.login,
          id: repo.owner.id,
          url: repo.owner.url,
          html_url: repo.owner.html_url,
          },
        private: repo.private,
        html_url: repo.html_url,
        description: repo.description,
        url: repo.url,
        created_at: repo.created_at,
        forks_count: repo.forks_count,
        default_branch: repo.default_branch
      }
      console.log('Currently Saving: ', newRepo.name);
      database.save(newRepo);
    }

  })

  .catch(function (err) {
    console.log('there was an error,', error);
  });

}

module.exports.getReposByUsername = getReposByUsername;