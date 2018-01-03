import $ from 'jquery';
var React = require('react');

var getReq = (cb) => {
  $.ajax({
    url: 'http://localhost:1128/repos', 
    type: 'GET', 
    success: (data) => {
      console.log('Get Request Success', data);
      cb(data);
    }, 
    error: (data) => {
      console.log('Get Request Failed', data);
    }
  })
}

export default getReq;