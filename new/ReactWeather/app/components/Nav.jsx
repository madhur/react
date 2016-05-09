var React = require('react')
var ReactDOM = require('react-dom')
var {Link} = require('react-router')

var Nav = React.createClass({
	render: function()
	{
		return (
			<div>
				<h2>Nav Component</h2>
				<Link to="/">Weather</Link>
				<Link to="/examples">Examples</Link>
				<Link to="/about">About</Link>
			</div>
			);


	}
});

module.exports=Nav;