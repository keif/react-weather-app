import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
	render(match) {
		return (
			<nav className="nav">
				<Link to="/">Home</Link>
				<Link to="/forecast">Forecast</Link>
			</nav>
		);
	}
}

export default Nav;
