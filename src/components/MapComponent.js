import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapComponent.css';
import PropTypes from 'prop-types';

const styles = {
  width: "100vw",
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
        style: "mapbox://styles/jessicaliang/ckcv0sd9t00861irp6uuv5xh6", // stylesheet location
        center: [0, 16],
        zoom: 1
      });
		
      map.on("load", () => {
				setMap(map);
        map.resize();
        
        console.log({coordinates});

        for (let i = 0; i < coordinates.length; i ++) {
          for (let y = 0; y < coordinates[i].length; y ++) {
            let el = document.createElement('div');
            el.style.backgroundImage =
              `url(${coordinates[i][y][1]})`;
            el.style.width = "75px";
            el.style.height = "75px";
            el.className = 'marker';

            let popup = new mapboxgl.Popup({ offset: 40 }).setText(
              userInformation[i]["places"][y][0].toUpperCase()
            );

            mapMarkers.push(new mapboxgl.Marker(el)
              .setLngLat(coordinates[i][y][0])
              .setPopup(popup)
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
    console.log({userInformation});
    mapMarkers.forEach((marker) => {
      marker.remove();
    });
    mapMarkers.length = 0;
    console.log({mapMarkers});

    for (let i = 0; i < coordinates.length; i ++) {
      for (let y = 0; y < coordinates[i].length; y ++) {
        let el = document.createElement('div');
        el.style.backgroundImage =
          `url(${coordinates[i][y][1]})`;
        el.style.width = "75px";
        el.style.height = "75px";
        el.className = 'marker';

        let popup = new mapboxgl.Popup({ offset: 40 }).setText(
          userInformation[i]["places"][y][0].toUpperCase()
        );

        mapMarkers.push(new mapboxgl.Marker(el)
          .setLngLat(coordinates[i][y][0])
          .setPopup(popup)
          .addTo(map));
      }
    }
  }, [coordinates, map])

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default MapComponent;