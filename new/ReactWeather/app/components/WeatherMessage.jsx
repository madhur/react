var React = require('react')
var ReactDOM = require('react-dom')


var WeatherMessage = React.createClass({
	render: function()
	{
		return(

			<p>You are having {this.props.temp} at location {this.props.location}</p>
			);
	}
});

module.exports = WeatherMessage;