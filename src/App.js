var React = require('react');
var ReactDOM = require('react-dom');


var MyName = React.createClass({
	name: 'Ross',


  render: function () {
    return <h1>My name is {this.name}.</h1>;
  }
});

ReactDOM.render(
  <MyName />, 
  document.getElementById('app')
);