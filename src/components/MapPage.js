import React from 'react';
import PropTypes from 'prop-types';
import MapComponent from './MapComponent';
import './MapPage.css';

const MapPage = (props) => {

	return (
		<div className="map-container">
			<MapComponent {...props} />
		</div>
	);
	
};

export default MapPage;