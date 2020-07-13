import React from 'react';
import PropTypes from 'prop-types';
import MapComponent from './MapComponent';
import './MapPage.css';

const MapPage = (props) => {

	return (
		<div className="map-container">
			<MapComponent userInformation={ props.userInformation } coordinates={ props.coordinates } />
		</div>
	);
	
};

export default MapPage;