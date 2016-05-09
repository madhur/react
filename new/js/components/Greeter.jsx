var React = require('react')
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

var Greeter = React.createClass({

	handleNewName: function(name)
	{
		this.setState({
			name: name
		});

	},

	getDefaultProps: function()
	{
			return {
				msg: "This is from a component"
			}
	},

	getInitialState: function()
	{
		return {
			name: "initial state"
		}
	},

	render: function()
	{
		return(
			<div>
				<GreeterMessage msg={this.props.msg} name={this.state.name} />
				<GreeterForm onNewName={this.handleNewName} />
			</div>
			);
	}

});

module.exports = Greeter;
