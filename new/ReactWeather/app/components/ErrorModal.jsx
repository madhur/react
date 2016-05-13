var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({

	propTypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired
	},

	getDefaultProps: function()
	{
		return {
			title: "Error"
		}
	},

	componentDidMount: function()
	{
		var modalMarkup = (<div className="reveal tiny text-centered" id="error-modal" data-reveal="">
					<h4>{this.props.title}</h4>
					<p>{this.props.message}</p>
					<p>
						<button className="button hollow" data-close="">
							Okay
						</button>
					</p>
				</div>);

		var $modal = $(ReactDOMServer.renderToString(modalMarkup));
		$(ReactDOM.findDOMNode(this)).html($modal);

		var modal = new Foundation.Reveal($('#error-modal'));
		modal.open();
		var callback = this.props.callback;

		$(document).on('closed.zf.reveal', '[data-reveal]', function () {
			console.log('closed');
			callback();
		});
	},

	render: function()
	{
		return(
				<div>
				</div>
			);

	}

});

module.exports = ErrorModal;