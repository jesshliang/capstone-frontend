import React from 'react';
import PropTypes from 'prop-types';
import MapComponent from './MapComponent';

const MapPage = () => {

	return (
		<div>
			<MapComponent />
			<p>
				{/* Put the list of trips here as COMPONENT */}
			</p>
		</div>
	);
	
};

export default MapPage;