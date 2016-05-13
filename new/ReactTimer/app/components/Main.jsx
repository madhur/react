var React = require('react')
var ReactDOM = require('react-dom')

var Main = React.createClass({
	render: function()
	{
		return (
			<div>
				<div>
					<div>
						{this.props.children}
					</div>
				</div>
			</div>
			);
	}
});

module.exports = Main;