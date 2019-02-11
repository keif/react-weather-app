import React, { Component } from "react";

import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";

class Home extends Component {
	state = {
		weather: {
			temperature: undefined,
			city: undefined,
			country: undefined,
			humidity: undefined,
			description: undefined,
			error: undefined
		}
	};
	setWeatherState = (data, format) => {
		let weatherObj = {};

		if (format === "forecast") {
			weatherObj = {
				temperature: Math.floor(data.list[0].main.temp),
				city: data.city.name,
				country: data.city.country,
				humidity: data.list[0].main.humidity,
				description: data.list[0].weather[0].description,
				error: undefined
			};
		} else if (format === "weather") {
			weatherObj = {
				temperature: Math.floor(data.main.temp),
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				error: undefined
			};
		}

		this.setState({
			weather: weatherObj
		});
	};
	render() {
		return (
			<div className="home">
				<Titles />
				<Form setState={this.setWeatherState} />
				<Weather weather={this.state.weather} />
			</div>
		);
	}
}

export default Home;
