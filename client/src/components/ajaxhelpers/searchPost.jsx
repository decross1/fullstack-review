import $ from 'jquery';
var React = require('react');

var searchPost = (username) => {
  var data = JSON.stringify({username: username})
  $.ajax({
    url: '/repos', 
    type: 'POST', 
    dataType: 'text',
    data: data, 
    success: (data) => {
      console.log('Post success', data);
    }, 
    error: (data) => {
      console.log('Post error', data);
    }
  })
}

export default searchPost;