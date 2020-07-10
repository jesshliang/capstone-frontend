import React, { useEffect, useState, useRef } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css'
import PropTypes from 'prop-types';

const styles = {
  width: "90vw",
	height: "65vh",
	overflow: "hidden",
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
        center: [12.550343, 55.665957],
        zoom: 8
			});
		
      map.on("load", () => {
				setMap(map);
				map.resize();
				
				const marker = new mapboxgl.Marker()
				.setLngLat([12.550343, 55.665957])
        .addTo(map);

        const marker2 = new mapboxgl.Marker()
				.setLngLat([12.6561, 55.6381])
        .addTo(map);
			});
    };

		if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapComponent;