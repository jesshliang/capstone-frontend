import React from 'react';
import PropTypes from 'prop-types';
import MapPage from './MapPage';
import Trips from './Trips';
import './Dashboard.css';

const Dashboard = (props) => {

	

	return (
		<div id="dashboard">
			<header>
				<section>
					username: { props.currentUser }
				</section>
				<h1>What's my App called?</h1>
				<section>
					<button onClick={ props.onLogoutCallback }>Log Out</button>
				</section>
			</header>
			<main id="dashboard__main_content">
					<MapPage />
					<Trips userInformation={ props.userInformation } />			
			</main>
		</div>
	);
	
};

export default Dashboard;