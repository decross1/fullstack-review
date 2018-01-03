import $ from 'jquery';
var React = require('react');

var searchPost = (username) => {
  var username = JSON.stringify({username: username})
  // console.log(username);
  $.ajax({
    url: 'http://localhost:1128/repos', 
    type: 'POST', 
    contentType: 'application/json',
    data: username, 
    success: (data) => {
      console.log('Post success', data);
    }, 
    error: (data) => {
      console.log('Post error', data);
    }
  })
}

export default searchPost;