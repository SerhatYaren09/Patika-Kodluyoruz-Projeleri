import React from 'react';

const Today = ({ current, city }) => {

    return (
        <div className='flex-col'>
            <div className='flex flex-col justify-start items-center h-full mt-10'>
                <p>
                    <span className='font-extrabold text-white text-5xl'>Today</span>
                </p>
                <img src={`http://openweathermap.org/img/wn/${current.icon}@4x.png`} alt="weather icon" />
                <p>
                    <span className='text-white text-5xl'>{current.temp}°C</span>
                </p>
                <p className='text-gray-50 font-bold mt-5 text-3xl'>{current.description}</p>

                <div className='flex justify-center items-center mb-10'>
                    <p className='text-gray-400 font-bold text-2xl mt-5'>
                        <i className='material-icons'>location_on</i>{city}
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Today;