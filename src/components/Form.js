import React, { Component } from "react";

import { getWeather } from "./../api/openweathermap";

class Form extends Component {
	formSubmit = (event) => {
		event.preventDefault();
		const inputElements = event.target.elements;
		const apiCallType = inputElements.type.value || "weather";

		getWeather(inputElements)
			.then((result) => {
				if (result) {
					this.props.setParentState(result, apiCallType);
				}
			})
			.catch((error) => console.error(error));
	};
	render() {
		return (
			<div>
				<form onSubmit={this.formSubmit}>
					<div>
						<input id="city" type="text" name="city" placeholder="city..." />
						<br />
						or
						<br />
						<input id="zip" type="text" name="zip" placeholder="zip..." />
						<br />
						<input id="country" type="text" name="country" placeholder="(optional) country" />
					</div>
					<select id="type" name="type">
						<option value="forecast">Forecast</option>
						<option value="weather">Weather</option>
					</select>
					<br />
					<button type="submit">Get Weather</button>
				</form>
			</div>
		);
	}
}

export default Form;
