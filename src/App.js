var React = require('react');
var ReactDOM = require('react-dom');


var people = ['Rowe', 'Prevost', 'Gare'];

var peopleLIs = people.map(function(person){
  return <li>{person}</li>
});

ReactDOM.render(
<ul>{peopleLIs}</ul>,
document.getElementById('app')
);
