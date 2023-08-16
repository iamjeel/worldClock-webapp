import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import './OpenStreetMapComponent.css'; // Import your custom CSS

const OpenStreetMapComponent = ({ theme, geojsonData }) => {
  const tileLayerUrl =
    theme === 'dark'
      ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
      : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      className={`map-container ${theme}-theme`} // Apply theme class
    >
      <TileLayer url={tileLayerUrl} />
      <GeoJSON
        data={geojsonData}
        className={`geojson-layer ${theme}-theme`} // Apply theme class
      />
    </MapContainer>
  );
};

export default OpenStreetMapComponent;
