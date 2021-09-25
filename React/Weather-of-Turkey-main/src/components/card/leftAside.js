import React, { useContext } from 'react';

import WeatherDataContext from '../../contexts/WeatherDataContext';

import Today from '../Today/Today';
import Search from '../Search/Search';

const LeftAside = () => {

    const { getWeather, getCity } = useContext(WeatherDataContext);

    console.log(getWeather)

    if (getWeather.length === 0) {
        return (<h1>Loading...</h1>);
    }

    return (
        <>
            <Today current={getWeather[0]} city={getCity.name} />
            <Search />
        </>
    )
}

export default LeftAside;