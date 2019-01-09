var React = require('react');
var ReactDOM = require('react-dom');

var TeamContainer = require('./containers/TeamContainer.jsx');

window.onload = function () {
  ReactDOM.render(
    <TeamContainer />,
    document.getElementById('app')
  );
};
