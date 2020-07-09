import React from 'react';
import PropTypes from 'prop-types';
import MapPage from './MapPage';

const Dashboard = (props) => {

	return (
		<div>
			<header>
				<nav>
					<p>
						username: { props.currentUser }
					</p>
					<button onClick={ props.onLogoutCallback }>Log Out</button>
				</nav>
			</header>

			<MapPage />
		</div>
	);
	
};

export default Dashboard;