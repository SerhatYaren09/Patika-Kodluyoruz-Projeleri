import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { WeatherDataProvider } from './contexts/WeatherDataContext';

ReactDOM.render(
  <WeatherDataProvider>
    <App />
  </WeatherDataProvider>,
  document.getElementById('root')
);

reportWebVitals();