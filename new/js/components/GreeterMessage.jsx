var React = require('react')

var GreeterMessage = React.createClass({
	render: function()
	{
		return (
				<div>
					<h1> Hello {this.props.name} </h1>
					<p>{this.props.msg}</p>
				</div>
			);
	}

});

module.exports = GreeterMessage;