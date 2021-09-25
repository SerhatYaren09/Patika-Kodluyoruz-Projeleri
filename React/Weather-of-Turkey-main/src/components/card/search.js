import React, { useState, useContext } from 'react';

import WeatherDataContext from '../../contexts/WeatherDataContext';
import citiesData from '../../citiesTurkey.json';

const Search = () => {

    const [county, setCounty] = useState('');
    const { setCity } = useContext(WeatherDataContext);

    const options = citiesData.map(city => (<option key={(city.name)} value={(city.name)} />));

    const getCoordinates = (county) => {
        const { name, latitude, longitude } = citiesData.find(city => city.name === county);
        setCity({
            name,
            latitude,
            longitude
        });
    };

    return (
        <div >
            <div className='flex justify-center items-center'>
                <p className='text-indigo-200 font-semibold py-2 px-4' htmlFor="cities">Select a City</p>
            </div>
            <div className='flex justify-center items-center'>
                <div>
                    <input list="cities" id="county" name="county" onInput={(e) => setCounty(e.target.value)} />
                    <datalist id="cities">
                        {options}
                    </datalist>
                </div>
                <button className='text-indigo-100 font-semibold py-2 px-4 border border-white-400 rounded shadow m-4' onClick={() => getCoordinates(county)}>Get Weather Info</button>
            </div>
        </div>
    );
};

export default Search;