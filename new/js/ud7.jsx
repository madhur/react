var React = require('react')
var ReactDOM = require('react-dom')

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

var GreeterForm = React.createClass({

	onButtonClick: function(e)
	{
		e.preventDefault();
		var name = this.refs.myname.value;
		this.props.onNewName(name);

	},

	render: function()
	{
		return(
				<form onSubmit={this.onButtonClick}>
					<input type="text" ref="myname"></input>
					<button>Set Name</button>
				</form>

			);
	}

});

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

var msg = 'my custom message/...';

ReactDOM.render(<Greeter msg={msg} />, 
	document.getElementById('main'));