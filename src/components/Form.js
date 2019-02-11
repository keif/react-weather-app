import React, { Component } from "react";

const API_KEY = process.env.REACT_APP_WEATHER_API;

class Form extends Component {
	getWeather = async (event) => {
		event.preventDefault();

		const apiURL = `http://api.openweathermap.org/data/2.5/`;
		const inputElements = event.target.elements;
		const city = inputElements.city.value;
		const country = inputElements.country.value;
		const apiCallType = inputElements.type.value || "weather";
		const apiCall = await fetch(`${apiURL}${apiCallType}?q=${city},${country}&APPID=${API_KEY}&units=imperial`);
		const data = await apiCall.json();

		if (data) {
			this.props.setState(data, apiCallType);
		}
	};

	render() {
		return (
			<div>
				<form onSubmit={this.getWeather}>
					<div>
						<input id="city" type="text" name="city" placeholder="city..." />
						<br />
						<input id="country" type="text" name="country" placeholder="country..." />
					</div>
					<select id="type" name="type">
						<option>Select One</option>
						<option value="forecast">Forecast</option>
						<option value="weather">Weather</option>
					</select>
					<br />
					<button>Get Weather </button>
				</form>
			</div>
		);
	}
}

export default Form;
