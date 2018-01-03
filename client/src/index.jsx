import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import searchPost from './components/ajaxhelpers/searchPost.jsx';
import initGet from './components/ajaxhelpers/initGet.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

    this.initFetch = this.initFetch.bind(this)
    this.search = this.search.bind(this)
    this.stateSet = this.stateSet.bind(this)

    this.initFetch();
  }

  initFetch() {
    initGet(this.stateSet)
  }

  stateSet(repos) {
    this.setState({
      repos: repos
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    searchPost(term);
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));