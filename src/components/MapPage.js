import React from 'react';
import PropTypes from 'prop-types';
import MapComponent from './MapComponent';

const MapPage = () => {
	const BASE_URL = "https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_MAP_API + "&map_ids=1de442a0ec3aad9";

	return (
		<div>
			<MapComponent 
				// isMarkerShown
				googleMapURL={BASE_URL}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `400px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
			<p>
				Hello mapo.
			</p>
		</div>
	);
};

export default MapPage;