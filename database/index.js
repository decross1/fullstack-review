const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: { type: Number, required: true, unique: true }, 
  name: { type: String, required: true }, 
  full_name: { type: String, require: true }, 
  owner: {
    login: String,
    id: Number,
    url: String,
    html_url: String,
    },
  private: Boolean,
  html_url: String,
  description: String,
  url: String,
  created_at: Date,
  forks_count: Number,
  default_branch: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  console.log('saving started')
  let newRepo = new Repo(repo)
  newRepo.save(function (err) {
    if(err) { console.log(err); }
    console.log('Repo: ' + newRepo.name + ' was saved!')
  })
}

module.exports.save = save;
module.exports.Repo = Repo;