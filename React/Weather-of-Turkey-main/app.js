import React from 'react';

import './App.css';

import { WeatherDataProvider } from './contexts/WeatherDataContext';

import Layout from './components/Layout/Layout';
import LeftAside from './components/LeftAside/LeftAside';
import RightAside from './components/RightAside/RightAside';


const App = () => {
  return (
    <WeatherDataProvider>
      <Layout>
        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 h-screen p-8'>
          <aside className='col-span-1 lg:col-span-2 bg-blue-lighter h-full'>
            <LeftAside />
          </aside>
          <aside className='cols-span-1 lg:col-span-4 bg-blue-dark h-full'>
            <RightAside />
          </aside>
        </div>
      </Layout>
    </WeatherDataProvider>
  )
};

export default App;