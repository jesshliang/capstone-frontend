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

MapPage.propTypes = {
	userInformation: PropTypes.array.isRequired,
	coordinates: PropTypes.array.isRequired
}

export default MapPage;