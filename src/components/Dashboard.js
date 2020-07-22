import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MapPage from './MapPage';
import Trips from './Trips';
import NewTripForm from './NewTripForm';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = (props) => {

	const addNewTrip = (otherFields, places) => {
		axios({
			method: 'post',
			url: "http://twitter.local:5000/trips",
      // url: "https://the-travel-mapp.herokuapp.com/trips",
      params: {
				username: props.currentUser,
				date: `${otherFields["month"]}-${otherFields["year"]}`,
				title: otherFields["title"],
				places: places
			},
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
				"Access-Control-Allow-Headers": "Origin, X-Auth-Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
			}
    })
    .then((response) => {
			props.setUserInformationCallback(response.data.trips);
    })
    .catch((error) => {
      console.log(error);
		});
	}

	const editTrip = (otherFields, places, index) => {
		axios({
			method: 'patch',
			url: "http://twitter.local:5000/trips",
      // url: "https://the-travel-mapp.herokuapp.com/trips",
      params: {
				index: index,
				username: props.currentUser,
				date: otherFields["date"],
				title: otherFields["title"],
				places: places
			},
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
				"Access-Control-Allow-Headers": "Origin, X-Auth-Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
			}
    })
    .then((response) => {
			props.setUserInformationCallback(response.data.trips);
    })
    .catch((error) => {
      console.log(error);
		});
	}

	const deleteTrip = (id) => {
		axios({
			method: 'delete',
			url: "http://twitter.local:5000/trips",
      // url: "https://the-travel-mapp.herokuapp.com/trips",
      data: {
				username: props.currentUser,
				key: id
			},
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
				"Access-Control-Allow-Headers": "Origin, X-Auth-Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
			}
    })
    .then((response) => {
			console.log(response);
			props.setUserInformationCallback(response.data.trips);
    })
    .catch((error) => {
      console.log(error);
		});
	}

	return (
		<div id="dashboard">
			<header>
				<section>
					{ props.currentUser }
				</section>
				<h1>the travel mApp</h1>
				<section>
					<button onClick={ props.onLogoutCallback }>Log Out</button>
				</section>
			</header>
			<main id="dashboard__main_content">
					<MapPage 
						userInformation={ props.userInformation } 
					/>
					<NewTripForm 
						addNewTripCallback = { addNewTrip }
					/>
					<Trips 
						userInformation={ props.userInformation } 
						editTripCallback = { editTrip }
						deleteTripCallback = { deleteTrip }
					/>			
			</main>
		</div>
	);
	
};

Dashboard.propTypes = {
	onLogoutCallback: PropTypes.func.isRequired,
	setUserInformationCallback: PropTypes.func.isRequired,
	currentUser: PropTypes.string.isRequired,
	userInformation: PropTypes.array.isRequired
};

export default Dashboard;