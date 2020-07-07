import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import mapStyles from './mapStyles.json';

const MapComponent = withScriptjs(withGoogleMap((props) =>
		<GoogleMap
			defaultZoom={2}
			defaultCenter={{ lat: 39.850034, lng: -176.058742 }}
			defaultOptions={{ styles: mapStyles }}
		>
			{/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />} */}
		</GoogleMap>
));

export default MapComponent;
{/* <MyMapComponent isMarkerShown />// Map with a Marker
<MyMapComponent isMarkerShown={false} />// Just only Map */}