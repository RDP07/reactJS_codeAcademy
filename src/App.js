var React = require('react');
var ReactDOM = require('react-dom');


var MyName = React.createClass({
	// name property goes here:


  render: function () {
    return <h1></h1>;
  }
});

ReactDOM.render(
  <MyName />, 
  document.getElementById('app')
);