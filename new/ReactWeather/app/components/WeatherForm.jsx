var React = require('react')
var ReactDOM = require('react-dom')

var WeatherForm = React.createClass({

	onSubmitHandle: function(e)
	{
		// prevent the postback
		e.preventDefault();

		var location = this.refs.location.value;
		if(location!=null && location.length > 0)
		{
			this.refs.location.value = '';
			this.props.onSubmitHandle(location);
		}
		else
		{
			alert('You must specify the location');
		}
	},

	render: function()
	{
			return(

				<div>
				<h1>Get Weather</h1>
				<form onSubmit={this.onSubmitHandle}>
					<input type="text" ref="location" placeholder="Enter city name"></input>
					<button>Get Weather</button>
				</form>
				</div>
				);
	}

});

module.exports = WeatherForm;