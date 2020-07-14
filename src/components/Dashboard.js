import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MapPage from './MapPage';
import Trips from './Trips';
import NewTripForm from './NewTripForm';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = (props) => {

	const [encodedLocations, setEncodedLocations] = useState([]);
	const [coordinates, setCoordinates] = useState([]);

	useEffect(() => {
		setEncodedLocations([]);
		for (let i = 0; i < props.userInformation.length; i ++) {
			encodedLocations.push([]);
			for (const place of props.userInformation[i].places) {
				encodedLocations[i].push( escape(place[0]) );
			};
		};
	
		setCoordinates([]);
		for (let i = 0; i < encodedLocations.length; i ++) {
			coordinates.push([]);
			for (let y = 0; y < encodedLocations[i].length; y ++) {
				axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedLocations[i][y]}.json?access_token=pk.eyJ1IjoiamVzc2ljYWxpYW5nIiwiYSI6ImNrY2I3N25wazFpOGEzMHF0dHY3aHNkOWUifQ.ItSK1BDpYydbUVyDPvdj6A`)
					.then((response) => {
						coordinates[i].push( [response.data.features[0].center, props.userInformation[i].places[y][1]] );
					})
					.catch((error) => {
						console.log(error);
					})
			}
		}
	}, [props.userInformation]);


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
					<MapPage userInformation={ props.userInformation } coordinates={ coordinates } />
					<NewTripForm currentUser={ props.currentUser } userInformation={ props.userInformation } coordinates={ coordinates } setUserInformationCallback = { props.setUserInformationCallback } />
					<Trips userInformation={ props.userInformation } />			
			</main>
		</div>
	);
	
};

export default Dashboard;