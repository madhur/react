var React = require('react')

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

module.exports = GreeterForm;