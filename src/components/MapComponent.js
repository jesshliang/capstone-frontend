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

const MapComponent = ({userInformation}) => {
  const [map, setMap] = useState(null);
  const [mapMarkers, setMapMarkers] = useState([]);
  const mapContainer = useRef(null);

  const loadMarkers = () => {
    userInformation.forEach((trip) => {
      for (const place of trip.places) {
        if (place.coordinates === 'invalid') {
          continue;
        };

        let el = document.createElement('div');
        el.style.backgroundImage =
          `url(${place.url})`;
        el.style.width = "75px";
        el.style.height = "75px";
        el.className = 'marker';

        let popup = new mapboxgl.Popup({ offset: 40 }).setText(
          place.location
        );

        mapMarkers.push(new mapboxgl.Marker(el)
          .setLngLat(place.coordinates)
          .setPopup(popup)
          .addTo(map));
      }
    });
  }

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAP_API;

    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/jessicaliang/ckcv0sd9t00861irp6uuv5xh6", // stylesheet location
        center: [0, 16],
        zoom: 1
      });

      map.addControl(new mapboxgl.NavigationControl());
		
      map.on("load", () => {
				setMap(map);
        map.resize();
      });
    };

		if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  useEffect(() => {
    if (!map) { return }

    mapMarkers.forEach((marker) => {
      marker.remove();
    });
    mapMarkers.length = 0;

    loadMarkers();
  }, [userInformation, map])

  return (
    <div ref={el => (mapContainer.current = el)} style={styles} />
  );
};

MapComponent.propTypes = {
	userInformation: PropTypes.array.isRequired,
}

export default MapComponent;