const API_KEY = process.env.REACT_APP_WEATHER_API;
const apiURL = `http://api.openweathermap.org/data/2.5/`;

const _getWeather = result => {
	if (result) {
		return result;
	}

	return undefined;
};

const buildURL = formDetails => {
	const [ city, zip, country, type ] = formDetails;
	const apiCallType = type.value || `weather`;
	const queryKey = (city && city.value) ? `q` : `zip`;
	const cityValue = city.value || ``;
	const countryValue = country.value || ``;

	let queryValues = (cityValue.length) ? `${cityValue}` : ``;
	queryValues = queryValues || zip.value;
	queryValues += (queryValues.length && countryValue.length) ? `,${countryValue}` : ``;

	return `${apiURL}${apiCallType}?${queryKey}=${queryValues}&APPID=${API_KEY}&units=imperial`
};

const getWeather = async (formDetails) => {
	const apiCall = await fetch(buildURL(formDetails));
	const data = await apiCall.json();

	return _getWeather(data);
};

const getWeatherByLatLong = async (lat, long, apiCallType) => {
	apiCallType = apiCallType || "weather";

	const apiCall = await fetch(`${apiURL}${apiCallType}?lat=${lat}&lon=${long}&APPID=${API_KEY}&units=imperial`);
	const data = await apiCall.json();

	return _getWeather(data);
};

export {
	getWeather,
	getWeatherByLatLong
};
