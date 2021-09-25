import React from 'react';

const HumidityCard = ({ humidity }) => {
    return (
        <div className='bg-blue-lighter rounded-lg px-auto py-8'>
            <div className='flex-col'>
                <p className='text-center text-gray-300'>Humidity</p>
                <div className='flex justify-center items-center mt-5'>
                    <span className='text-5xl font-bold'>
                        {humidity} %
                    </span>
                </div>

                <div className='flex justify-center items-center mt-3'>
                    <div className='w-9/12 bg-white rounded-full mt-2'>
                        <div className={`bg-progress-bar h-2 w-0 rounded-full w-${humidity}`}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HumidityCard;