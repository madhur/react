var names = ['Madhur', 'Ahuja', 'Anjli', 'Chopra'];

names.forEach(function(name)
{
	console.log('foreach', name);
});

names.forEach((name) => {
	console.log('arrowfunc', name);
});

names.forEach((name) => console.log(name))

var returnMe = (name) => name + '!';
console.log(returnMe('Madhur'))

var person = {
	name: 'Andrew',
	greet: function(){
		names.forEach(function(name){
			console.log(this.name + ' says hi to ' + name)
		});
	}
};

person.greet();