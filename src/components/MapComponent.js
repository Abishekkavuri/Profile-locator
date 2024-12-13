import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GoogleMapReact from 'google-map-react';
import './MapComponent.css';

const API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your Google Maps API Key

const Marker = ({ text }) => <div className="marker">📍{text}</div>;

const MapComponent = ({ address }) => {
  const [coordinates, setCoordinates] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json`,
          {
            params: {
              address,
              key: API_KEY,
            },
          }
        );
        const location = response.data.results[0].geometry.location;
        setCoordinates(location);
      } catch (error) {
        console.error('Error fetching coordinates:', error);
      }
    };

    fetchCoordinates();
  }, [address]);

  return (
    <div className="map-container">
      {coordinates ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={coordinates}
          defaultZoom={14}
        >
          <Marker lat={coordinates.lat} lng={coordinates.lng} text="Here" />
        </GoogleMapReact>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default MapComponent;