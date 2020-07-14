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
		const locations = [];
		for (let i = 0; i < props.userInformation.length; i ++) {
			locations.push([]);
			for (const place of props.userInformation[i].places) {
				locations[i].push( escape(place[0]) );
			};
		};
		setEncodedLocations(locations);
		
		const localCoordinates = [];
		const encodingPromises = [];
		for (let i = 0; i < locations.length; i ++) {
			localCoordinates.push([]);
			const localPromises = locations[i].map((place, y) => {
				return (
					axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoiamVzc2ljYWxpYW5nIiwiYSI6ImNrY2I3N25wazFpOGEzMHF0dHY3aHNkOWUifQ.ItSK1BDpYydbUVyDPvdj6A`)
						.then((response) => {
							localCoordinates[i].push( [response.data.features[0].center, props.userInformation[i].places[y][1]] );
						})
						.catch((error) => {
							console.log(error);
						})
				);
			})
			encodingPromises.push(...localPromises)
		}

		Promise.all(encodingPromises)
			.then(() => {
				setCoordinates(localCoordinates);
			});
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