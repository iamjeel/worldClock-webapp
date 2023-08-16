import React, { useState } from 'react';
import OpenStreetMapComponent from './OpenStreetMapComponent';
import geojsonData from './custom.geo.json';
import './MapWithTheme.css'; // Import your custom CSS

const MapWithTheme = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="map-app">
      <button className="toggle-button" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <OpenStreetMapComponent theme={theme} geojsonData={geojsonData} />
    </div>
  );
};

export default MapWithTheme;
