var React = require('react')
var ReactDOM = require('react-dom');

/////////////////////////////////////////////////////////////////////////////////////

//var reactElement = React.createElement('h1');
//ReactDOM.render(reactElement, document.getElementById('react-application'));

// var h1 = React.createElement('h1', {className: 'header'}, 'This is react');

// var p = React.createElement('p', {className: 'content', key: 'content'}, "And that's how it works");

// var reactFragment = [h1, p];

// var section = React.createElement('section', { className: 'container'}, reactFragment);

// ReactDOM.render(section, document.getElementById('react-application'));

//ReactDOM.render(ReactElement, document.getElementById('react-application'))

// List of elements example//////////////////////////////////////////////////////////////

// var listItemElement1 = React.createElement('li', {className: 'item-1'}, 'Item 1');


var listItemElement2 = React.createElement('li', {className: 'item-2'}, 'Item 2');

var listItemElement3 = React.createElement('li', {className: 'item-3'}, 'Item 3');

var reactFragment = [listItemElement1, listItemElement2, listItemElement3];

var listOfItems = React.createElement('ul', {className: 'list-of-items'}, reactFragment);

ReactDOM.render(listOfItems, document.getElementById('react-application'));


// Simplify using the factory function/////////////////////////////////////////////

var createListItemElement = React.createFactory('li');

var listItemElement1 = createListItemElement({className: 'item-1', key: 'item-1'}, 'Item 1');


var listItemElement2 = createListItemElement({className: 'item-2', key: 'item-2'}, 'Item 2');

var listItemElement3 = createListItemElement({className: 'item-3', key: 'item-3`'}, 'Item 3');

var reactFragment = [listItemElement1, listItemElement2, listItemElement3];

var listOfItems = React.createElement('ul', {className: 'list-of-items'}, reactFragment);

ReactDOM.render(listOfItems, document.getElementById('react-application'));

///////////////////// simplify by using the builtin common html tags
/////////////////////////// Our first stateless component

var ReactClass = React.createClass({
	render: function()
	{
		return React.createElement('h1', {className: 'header'}, 'This is react component')
	}

});

var reactElement= React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactElement, document.getElementById('react-application'));

/////////////////////////// Our first Stateful component

var ReactClass = React.createClass({

	getInitialState: function()
	{
		return {
			isHeaderHidden: false,
			title: 'Stateful React component'
		};
	},

	handleClick: function()
	{
		this.setState({
			isHeaderHidden: !this.state.isHeaderHidden
		})
	},

	render: function()
	{
		var headerElement = React.createElement(
			'h1', 
			{className: 'header', key: 'header'}, 
			this.state.title
			);

		var buttonElement = React.createElement(
			'button', 
			{className: 'btn btn-default', onClick: this.handleClick, key: 'button'},
			'Toggle header'
			);

		if(this.state.isHeaderHidden)
		{
			return React.createElement('div', null, [buttonElement]);
		}

		return React.createElement('div', null, [buttonElement, headerElement])
	}

});

var reactElement= React.createElement(ReactClass);
var reactComponent = ReactDOM.render(reactElement, document.getElementById('react-application'));


