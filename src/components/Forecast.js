import React, { Component } from "react";

import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";

import { getWeatherByLatLong } from "./../api/openweathermap";

const formatWeatherData = (data, format) => {
	format = format || "weather";

	if (format === "forecast") {
		return {
			temperature: Math.floor(data.list[0].main.temp),
			city: data.city.name,
			country: data.city.country,
			humidity: data.list[0].main.humidity,
			description: data.list[0].weather[0].description,
			error: undefined
		};
	} else if (format === "weather") {
		return {
			temperature: Math.floor(data.main.temp),
			city: data.name,
			country: data.sys.country,
			humidity: data.main.humidity,
			description: data.weather[0].description,
			error: undefined
		};
	}
};

class Forecast extends Component {
	constructor(props) {
		super(props);
		const module = this;

		this.state = {
			weather: {}
		};

		navigator.geolocation.getCurrentPosition(function(location) {
			const locCoords = location.coords;

			getWeatherByLatLong(locCoords.latitude, locCoords.longitude)
				.then(data => {
					if (data) {
						module.setState({
						    weather: formatWeatherData(data)
						});
					}
				})
				.catch((reason) => console.error(reason));
		});
	}
	setWeatherState = (data, format) => {
		this.setState({
			weather: formatWeatherData(data, format)
		});
	};
	render() {
		return (
			<div className="forecast">
				<Titles />
				<Form setParentState={this.setWeatherState} />
				<Weather weather={this.state.weather} />
			</div>
		);
	}
}

export default Forecast;
