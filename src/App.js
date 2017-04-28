var React = require('react');
var ReactDOM = require('react-dom');

/*var greatestDivEver = <div>i am div</div>;*/

var greatestDivEver = React.createElement(
"div",
null,
'i am div'
);

ReactDOM.render(
	greatestDivEver,
	document.getElementById('app')
	);