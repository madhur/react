var Greeter = React.createClass({

	getDefaultProps: function()
	{
			return {
				name: "React!!!",
				msg: "This is from a component"
			}

	},

	getInitialState: function()
	{
		return {
			name: "initial state"
		}
	},

	onButtonClick: function(e)
	{
		e.preventDefault();
		var name = this.refs.myname.value;
		//alert(name);
		this.setState({
			name: name
		});

	},

	render: function()
	{
		return(
			<div>
				<h1> Hello {this.state.name} </h1>
				<p>{this.props.msg}</p>

				<form onSubmit={this.onButtonClick}>
					<input type="text" ref="myname"></input>
					<button>Set Name</button>
				</form>
			</div>
			);
	}

});

var msg = 'my custom message/...';

ReactDOM.render(<Greeter msg={msg} />, 
	document.getElementById('main'));