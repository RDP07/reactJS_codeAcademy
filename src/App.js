var React = require('react');
var ReactDOM = require('react-dom');

var Button = React.createClass({
  scream: function () {
    alert('AAAAAAAAHHH!!!!!');
  },

  render: function () {
    return <button>AAAAAH!</button>;
  }
});