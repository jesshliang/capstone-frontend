import React, { useEffect, useState, useRef } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import mapboxgl from "mapbox-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
import PropTypes from 'prop-types';

const styles = {
  width: "100vw",
  height: "calc(100vh - 80px)",
  position: "absolute"
};

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAP_API;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/jessicaliang/ckcb79d7d5vit1jq928rxsova", // stylesheet location
        center: [0, 0],
        zoom: 1
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

// export default MapboxGLMap;

// const MapComponent = ReactMapboxGl({
// 	accessToken: process.env.REACT_APP_MAP_API
// });

export default MapComponent;