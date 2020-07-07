import React from 'react';
import PropTypes from 'prop-types';
import MapComponent from './MapComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const MapPage = () => {

	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					{/* <li>
						<Link to="/map-page">Map</Link>
					</li> */}
				</ul>
			</nav>
			<MapComponent />
			<p>
				Hello mapo.
			</p>
		</div>
	);
	
};

export default MapPage;