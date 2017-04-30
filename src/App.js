var React = require('react');
var ReactDOM = require('react-dom');

var Quote = React.createClass({
  render: function() {
  	return (
  	  <blockquote>
  		<p>
  		  What is important now is to recover our senses.
  		</p>
  		<cite>
  		  <a target="_blank"
  		    href="http://bit.ly/1LvSLUA">
  		    Sustan Sontag
  		  </a>
  		</cite>
  	  </blockquote>
  	);
  }
});

ReactDOM.render(
  <Quote />,
  document.getElementById('app')
);