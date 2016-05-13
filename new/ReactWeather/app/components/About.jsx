var React = require('react')
var ReactDOM = require('react-dom')

// var About = React.createClass({
// 	render: function()
// 	{
// 		return (

// 				<h3>About Component</h3>
// 			);


// 	}
// });

var About = (props) => {
	return (
			<div>
				<h1 className="text-center">About</h1>
				<p>This is a weather application build on React. I have built this for the Complete React</p>
			</div>
			);
};

module.exports=About;