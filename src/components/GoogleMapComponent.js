import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 0,
  lng: 0,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDWSoECcU3azpxGsMjzwxL0ylYTpl9e2qY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2} // Zoom level for displaying the entire world map
      />
    </LoadScript>
  );
};

export default GoogleMapComponent;



