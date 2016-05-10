var React = require('react')
var ReactDOM = require('react-dom')

var WeatherForm = require('./WeatherForm')
var WeatherMessage = require('./WeatherMessage')

var Weather = React.createClass({

	getInitialState: function()
	{
		return {
			location: 'Miami',
			temp: 34
		}
	},
	
	onSubmitHandleFunc: function(location)
	{
		//alert(location);

		this.setState({
			location: location,
			temp: 88
		});
	},

	render: function()
	{
		return (
				<div>
					<h3>Weather Component</h3>
					<WeatherForm onSubmitHandle = {this.onSubmitHandleFunc}/>
					<WeatherMessage temp={this.state.temp} location={this.state.location}/>
				</div>
			);


	}
});

module.exports=Weather;