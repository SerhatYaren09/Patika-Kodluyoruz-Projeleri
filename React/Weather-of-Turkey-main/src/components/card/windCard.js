import React from 'react';

const WindCard = ({ windSpeed }) => {
    return (
        <div className='bg-blue-lighter rounded-lg px-auto py-8'>
            <div className='flex-col'>
                <p className='text-center text-gray-300'>Wind Status</p>
                <div className='flex justify-center items-center'>
                    <span className='text-5xl font-bold'>
                        {windSpeed} km/h
                    </span>
                </div>

                <div className='flex justify-center items-center mt-3'>
                    <i className='material-icons'>navigation</i>
                    <span className='text-gray-400'>N</span>
                </div>
            </div>
        </div>
    )
};

export default WindCard;