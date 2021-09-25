import axios from 'axios';

const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
const locationApiKey = process.env.REACT_APP_LOCATION_API_KEY;

const getWeather = async (lat = '41.015137', long = '28.97953') => {
    try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=hourly,minutely,alerts&appid=${weatherApiKey}`);
        const { current, daily } = data;
        current.daily = daily;
        return current;
    } catch (err) {
        throw new Error("Invalid API Request for getting weather info");
    }
};

const getCityName = async (lat, long) => {
    try {
        const APIURL = `https://us1.locationiq.com/v1/reverse.php?key=${locationApiKey}&lat=${lat}&lon=${long}&format=json`;
        const res = await fetch(APIURL);
        const { address } = await res.json();
        return address.county;
    } catch (err) {
        throw new Error("Invalid API Request for getting weather info");
    }
};

const weatherData = {
    getWeather,
    getCityName
};

export default weatherData;