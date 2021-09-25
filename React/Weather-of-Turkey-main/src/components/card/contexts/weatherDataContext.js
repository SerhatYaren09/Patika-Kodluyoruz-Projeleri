import { createContext, useEffect, useState, useCallback } from 'react';
import weatherDataService from '../services';

const WeatherDataContext = createContext({});

export const WeatherDataProvider = ({ children }) => {

    const [getWeather, setWeather] = useState([]);
    const [getCity, setCity] = useState({ name: "Istanbul", latitude: "41.015137", longitude: "28.97953" });

    const mapWeather = useCallback((data) => {
        const temp = data.temp;
        const mappedWeather = data.daily.map((daily, index) => {
            return {
                day: getDay(daily.dt),
                temp: temp,
                min: daily.temp.min,
                max: daily.temp.max,
                humidity: daily.humidity,
                windSpeed: daily.wind_speed,
                main: daily.weather[0].main,
                description: daily.weather[0].description,
                icon: daily.weather[0].icon
            };
        });
        setWeather(mappedWeather);
    }, []);


    useEffect(() => {
        weatherDataService
            .getWeather(getCity.latitude, getCity.longitude)
            .then(data => {
                mapWeather(data)
            })
            .catch(err => console.log(err));
    }, [getCity, mapWeather]);

    const getDay = (unixTime) => {
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[((new Date(unixTime * 1000).getUTCDay()))];
    };

    return (
        <WeatherDataContext.Provider value={{ getWeather, getCity, setCity }}>
            {children}
        </WeatherDataContext.Provider>
    );
};

export default WeatherDataContext;