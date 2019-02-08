import React, { Component } from "react";

import "./App.css";

import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";

const API_KEY = process.env.REACT_APP_WEATHER_API;

class App extends Component {
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined
	};
	getWeather = async (event) => {
		event.preventDefault();
		const inputElements = event.target.elements;
		const city = inputElements.city.value;
		const country = inputElements.country.value;
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}
    &APPID=${API_KEY}&units=imperial
    `);
		const data = await api_call.json();

		this.setState({
			temperature: Math.floor(data.main.temp),
			city: data.name,
			country: data.sys.country,
			humidity: data.main.humidity,
			description: data.weather[0].description,
			error: undefined
		});
	};
	render() {
		return (
			<div>
				<Titles />
				<Form getWeather={this.getWeather} />
				<Weather
					temperature={this.state.temperature}
					city={this.state.city}
					country={this.state.country}
					humidity={this.state.humidity}
					description={this.state.description}
					error={this.state.error}
				/>
			</div>
		);
	}
}

export default App;
