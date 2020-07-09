import React from 'react';
import PropTypes from 'prop-types';
import MapComponent from './MapComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const MapPage = (props) => {

	return (
		<div>
			<nav>
				<button onClick={ props.onLogoutCallback }>Log Out</button>
			</nav>
			<MapComponent />
			<p>
				
			</p>
		</div>
	);
	
};

export default MapPage;