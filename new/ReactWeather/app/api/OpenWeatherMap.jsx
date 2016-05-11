var axios = require('axios')

const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=fd8e51a8a23d22e2f1fb6733ff473fcd&units=metric';

// fd8e51a8a23d22e2f1fb6733ff473fcd


module.exports = {
	getTemp: function(location)
	{
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(response)
		{
			console.log(response);
			if(response.data.cod && response.data.message)
			{
				throw new Error(response.data.message);
			}
			else
			{
				return response.data.main.temp;
			}
		}, function(response)
		{
			console.log(response);
			throw new Error(response.data.message);
		});
	}
}