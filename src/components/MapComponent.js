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

const MapComponent = ({userInformation, coordinates}) => {
  const [map, setMap] = useState(null);
  const [mapMarkers, setMapMarkers] = useState([]);
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
        
        console.log({coordinates});

        for (let i = 0; i < coordinates.length; i ++) {
          for (const coordinatePair of coordinates[i]) {
            let el = document.createElement('div');
            el.style.backgroundImage =
              `url(${coordinatePair[1]})`;
            el.style.width = "75px";
            el.style.height = "75px";
            el.className = 'marker';

            mapMarkers.push(new mapboxgl.Marker(el)
              .setLngLat(coordinatePair[0])
              .addTo(map));
          }
        }
			});
    };

		if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  useEffect(() => {
    if (!map) { return }

    console.log({coordinates});
    mapMarkers.forEach((marker) => {
      marker.remove();
    });
    mapMarkers.length = 0;
    console.log({mapMarkers});

    for (let i = 0; i < coordinates.length; i ++) {
      for (const coordinatePair of coordinates[i]) {
        let el = document.createElement('div');
        el.style.backgroundImage =
          `url(${coordinatePair[1]})`;
        el.style.width = "75px";
        el.style.height = "75px";
        el.className = 'marker';

        mapMarkers.push(new mapboxgl.Marker(el)
          .setLngLat(coordinatePair[0])
          .addTo(map));
      }
    }
  }, [coordinates, map])

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapComponent;