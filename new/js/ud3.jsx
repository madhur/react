var Greeter = React.createClass({

	getDefaultProps: function()
	{
			return {
				name: "React!!!",
				msg: "This is from a component"
			}

	},

	render: function()
	{
		return(
			<div>
				<h1> Hello {this.props.name} </h1>
				<p>{this.props.msg}</p>
			</div>
			);
	}

});

var msg = 'my custom message/...';

ReactDOM.render(<Greeter msg={msg} />, 
	document.getElementById('main'));