var React = require('react')
var ReactDOM = require('react-dom')

var WeatherForm = require('./WeatherForm')
var WeatherMessage = require('./WeatherMessage')

var OpenWeatherMap =require('OpenWeatherMap');


var Weather = React.createClass({

	getInitialState: function()
	{
		// return {
		// 	location: 'Miami',
		// 	temp: 34
		// }

		return {
			isLoading: false
		}
	},
	
	onSubmitHandleFunc: function(location)
	{
		var that = this;
		//alert(location);

		// this.setState({
		// 	location: location,
		// 	temp: 88
		// });

		debugger;
		
		this.setState({
			isLoading: true
		})

		OpenWeatherMap.getTemp(location).then(function(temp)
		{
			that.setState({
			location: location,
			temp: temp,
			isLoading: false
			});

		}, function(error)
		{
			alert(error);
			that.setState({
			isLoading: false
		})

		});
	},

	render: function()
	{
		var temp = this.state.temp;
		var location = this.state.location;
		var isLoading = this.state.isLoading;

		function showLoadingMessage()
		{
			console.log(temp);
			console.log(location);
			console.log(isLoading);

			if(isLoading)
			{
				return (<h3>Loading Weather...</h3>);
			}
			else if(temp && location)
			{
				return (
					<WeatherMessage temp={temp} location={location}/>
					)
			}
			
		}

		return (
				<div>
					<h3>Weather Component</h3>
					<WeatherForm onSubmitHandle = {this.onSubmitHandleFunc}/>
					{showLoadingMessage()}
				</div>
			);


	}
});

module.exports=Weather;