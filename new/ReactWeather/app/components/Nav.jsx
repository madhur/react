var React = require('react')
var ReactDOM = require('react-dom')
var {Link, IndexLink} = require('react-router')

var Nav = React.createClass({

	onSearch: function(e)
	{
		e.preventDefault();
		//alert('not yet wired up');
		var searchLocation = this.refs.searchbox.value;
		//alert(searchLocation);
		var encodedLocation = encodeURIComponent(searchLocation);
		if(searchLocation.length > 0)
		{
			this.refs.searchbox.value = "";

			window.location.hash="#/?location=" + encodedLocation;
		}

	},

	render: function()
	{
		return (
			<div className="top-bar">
			  <div className="top-bar-left">
			    <ul className="menu" data-dropdown-menu>
			      <li className="menu-text">
			      	React Weather App
			      </li>
			      <li>
			      	<IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
			      </li>
			      
			      <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
			      <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
			    </ul>
			  </div>
			  <div className="top-bar-right">
			  	<form onSubmit={this.onSearch}>
			  	<ul className="menu">
			  		<li>
			  			<input type="search" ref="searchbox" placeholder="Search weather" />
			  		</li>
			  		<li>
			  			<input type="submit" className="button" value="Get Weather"></input>
			  		</li>
			  		</ul>
			  	</form>
			  </div>
			</div>
			);
	}
});

module.exports=Nav;

