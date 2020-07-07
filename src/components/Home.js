import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => {
	return (
		<p>
			<nav>
				<ul>
					<li>
						<Link to="/map-page">Map</Link>
					</li>
				</ul>
			</nav>

			Hello bingus.
		</p>
	);
};

export default Home;