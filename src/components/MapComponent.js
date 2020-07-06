import React from 'react';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import mapStyles from './mapStyles.json';

const MapComponent = withScriptjs(withGoogleMap((props) =>
		<GoogleMap
			defaultZoom={8}
			defaultCenter={{ lat: -34.397, lng: 150.644 }}
			defaultOptions={{ styles: mapStyles }}
		>
			{/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />} */}
		</GoogleMap>
));

export default MapComponent;
{/* <MyMapComponent isMarkerShown />// Map with a Marker
<MyMapComponent isMarkerShown={false} />// Just only Map */}