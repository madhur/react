var React = require('react')
var ReactDOM = require('react-dom')

var WeatherForm = require('./WeatherForm')
var WeatherMessage = require('./WeatherMessage')

var OpenWeatherMap =require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

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

		this.setState({
			isLoading: true,
			errorMessage: undefined,
			temp: undefined,
			location: undefined
		})

		OpenWeatherMap.getTemp(location).then(function(temp)
		{
			that.setState({
			location: location,
			temp: temp,
			isLoading: false
			});

		}, function(e)
		{
			alert(e);
			errorMessage = e.message;

			that.setState({
			isLoading: false
		})

		});
	},

	componentDidMount: function()
	{
		var location = this.props.location.query.location;

		if(location && location.length > 0)
		{
			this.onSubmitHandleFunc(location);
			window.location.hash="#/";
		}
	},

	componentWillReceiveProps: function(newProps)
	{
		var location = newProps.location.query.location;

		if(location && location.length > 0)
		{
			this.onSubmitHandleFunc(location);
			window.location.hash="#/";
		}

	},

	render: function()
	{
		var temp = this.state.temp;
		var location = this.state.location;
		var isLoading = this.state.isLoading;
		var errorMessage = this.state.errorMessage;

		function showLoadingMessage()
		{
			console.log(temp);
			console.log(location);
			console.log(isLoading);

			if(isLoading)
			{
				return (<h3 className="text-center">Loading Weather...</h3>);
			}
			else if(temp && location)
			{
				return (
					<WeatherMessage temp={temp} location={location}/>
					)
			}
			
		}

		function renderError()
		{
			if(typeof errorMessage === 'string')
			{
				return (
					<ErrorModal message={errorMessage}/>
					)
			}
		}

		return (
				<div>
					<h1 className="text-center page-title">Get Weather</h1>
					<WeatherForm onSubmitHandle = {this.onSubmitHandleFunc}/>
					{showLoadingMessage()}
					{renderError()}
				</div>
			);


	}
});

module.exports=Weather;