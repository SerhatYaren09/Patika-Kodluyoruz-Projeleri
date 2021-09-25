import React from 'react';

const Card = ({ daily }) => {
    return (
        <div className='bg-blue-lighter p-6 rounded-lg'>
            <div className='flex-col'>
                <p className='text-center'>{daily.day}</p>
                <div className='flex justify-center items-center'>
                    <img src={`http://openweathermap.org/img/wn/${daily.icon}@2x.png`} alt='weather icon'></img>
                </div>
            </div>
            <div className='justify-items-center flex space-y-6'>
                <span>{daily.min}°C</span>
                <span>{daily.max}°C</span>
            </div>
        </div>
    )
};

export default Card;