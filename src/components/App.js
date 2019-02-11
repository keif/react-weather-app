import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";

import "./App.css";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="app">
					<Nav />
					<Route exact path="/" component={Home}/>
				</div>
			</Router>
		);
	}
}

export default App;
