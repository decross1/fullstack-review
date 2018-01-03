import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    {props.repos.map((repo, index) => {
     return <li key={repo.id}>Repo: <a href={repo.url}>{repo.name}</a>   ||   Username: {repo.owner.login}   ||   Total Forks: {repo.forks_count} </li>
   })}

  </div>


)

export default RepoList;