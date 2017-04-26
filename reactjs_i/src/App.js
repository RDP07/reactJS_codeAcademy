var React = require('react');
var ReactDOM = require('react-dom');

// Write code here:
var myList = (
  <ul>
    <li>Angular</li>
    <li>React</li>
    <li>JavaScript</li>
    <li>Developing</li>
    <li>HTML</li>
    <li>CSS</li>
  </ul>
);

ReactDOM.render(
myList,
document.getElementById('container')
);