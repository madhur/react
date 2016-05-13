var React = require('react')
var ReactDOM = require('react-dom')


var WeatherMessage = React.createClass({
	render: function()
	{
		return(

			<h3 className="text-center">You are having {this.props.temp} at location {this.props.location}</h3>
			);
	}
});

module.exports = WeatherMessage;