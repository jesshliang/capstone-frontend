import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapComponent.css';
import PropTypes from 'prop-types';

const styles = {
  width: "90vw",
	height: "65vh",
	overflow: "hidden",
};

// props.userInformation + props.coordinates
const MapComponent = (props) => {
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

        for (let i = 0; i < props.coordinates.length; i ++) {
          for (const coordinatePair of props.coordinates[i]) {
            let el = document.createElement('div');
            el.style.backgroundImage =
              `url(${coordinatePair[1]})`;
            el.style.width = "75px";
            el.style.height = "75px";
            el.className = 'marker';

            new mapboxgl.Marker(el)
              .setLngLat(coordinatePair[0])
              .addTo(map);
          }
        }
			});
    };

		if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapComponent;