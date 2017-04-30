var React = require('react');
var ReactDOM = require('react-dom');

var fiftyFifty = Math.random() < 0.5;

var TonightsPlan = React.createClass({
  render: function () {
  	var plan;
  	if (fiftyFifty) {
  		plan = "out"
  	} else {
  		plan = "to bed"
  	}
  	return <h1>Tonight I'm going {plan} WOO </h1>;
  }
});

ReactDOM.render(
	<TonightsPlan />,
	document.getElementById('app')
);
