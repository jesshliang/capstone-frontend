import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import PropTypes from 'prop-types';

const MapComponent = ReactMapboxGl({
	accessToken: process.env.REACT_APP_MAP_API
});

export default MapComponent;