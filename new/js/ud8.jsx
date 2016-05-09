var React = require('react')
var ReactDOM = require('react-dom')

var Greeter = require('./components/Greeter');

var msg = 'my custom message/...';

ReactDOM.render(<Greeter msg={msg} />, 
	document.getElementById('main'));