import React, { Component } from "react";
import "./weather.css";

class Weather extends Component {
	render() {
		return (
			<div className="weather">
				{/* this will only display once this.prop.city etc is true */}
				{this.props.weather.city && this.props.weather.country && (
					<p>
						Location: {this.props.weather.city},{this.props.weather.country}
					</p>
				)}
				{this.props.weather.temperature && <p>Temperature: {this.props.weather.temperature}</p>}
				{this.props.weather.humidity && <p>Humidity: {this.props.weather.humidity}</p>}
				{this.props.weather.description && <p>Conditions :{this.props.weather.description}</p>}
				{this.props.weather.error}
			</div>
		);
	}
}

export default Weather;
