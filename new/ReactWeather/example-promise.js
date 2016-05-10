function getTempCallBack(location, callback)
{
	callback(undefined, 78);

	callback('city not found')
}

getTempCallBack('Delhi', function(err, temp)
{
	if(err)
	{
		console.log('error', err);
	}
	else
	{
		console.log('success', temp);
	}
});

function getTempPromise(location)
{
	return new Promise(function(resolve, reject)
	{
		setTimeout(function()
		{
			resolve(79);

			reject('city not found');

		},1000);

		

	});
}

getTempPromise('Delhi').then(function(temp)
{
	console.log('promise success', temp);
}, function(err)
{
	console.log('promise error', err);
});


function addPromise(a, b)
{
	return new Promise(function(resolve, reject)
	{
		if(typeof a == 'number' && typeof b == 'number')
		{
			resolve(a+b);
		}
		else
		{
			reject('not a number');
		}

	});
}

addPromise(2, 6).then(function(result)
	{
		console.log(result);

	}, function(err)
	{
		console.log(err);
	});
addPromise(2, '3').then(function(result)
	{
		console.log(result);
	}, function(err)
	{
		console.log(err);
	});
addPromise('3', '3').then(function(result)
	{
		console.log(result);
	}, function(err)
	{
		console.log(err);
	});