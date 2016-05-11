var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use(function(request, response, next){

	if(request.headers['x-forwarded-proto']=='http')
	{
		next();
	}
	else
	{
		response.redirect('http://' + request.hostname + request.url);
	}

});

app.use(express.static('public'));

const port  = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});