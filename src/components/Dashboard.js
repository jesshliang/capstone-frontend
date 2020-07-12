import React from 'react';
import PropTypes from 'prop-types';
import MapPage from './MapPage';
import Trips from './Trips';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = (props) => {

	const encodedLocations = [];
	for (let i = 0; i < props.userInformation.length; i ++) {
		encodedLocations.push([]);
		for (const place of props.userInformation[i].places) {
			encodedLocations[i].push(escape(place));
		};
	};

	const coordinates = [];
	for (let i = 0; i < encodedLocations.length; i ++) {
		coordinates.push([]);
		for (const place of encodedLocations[i]) {
			axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoiamVzc2ljYWxpYW5nIiwiYSI6ImNrY2I3N25wazFpOGEzMHF0dHY3aHNkOWUifQ.ItSK1BDpYydbUVyDPvdj6A`)
				.then((response) => {
					coordinates[i].push(response.data.features[0].center);
				})
				.catch((error) => {
					console.log(error);
				})
		}
	}

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
					{console.log(coordinates)}
					<MapPage userInformation={ props.userInformation } />
					<Trips userInformation={ props.userInformation } />			
			</main>
		</div>
	);
	
};

export default Dashboard;