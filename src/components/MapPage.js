import React from 'react';
import PropTypes from 'prop-types';
import MapComponent from './MapComponent';

const MapPage = () => {

	return (
		<div>
			<MapComponent 
				style='mapbox://styles/jessicaliang/ckcb79d7d5vit1jq928rxsova'
				containerStyle={{
					height: '30vh',
					width: '50vw'
				}}
			/>
			<p>
				Hello mapo.
			</p>
		</div>
	);
	
};

export default MapPage;