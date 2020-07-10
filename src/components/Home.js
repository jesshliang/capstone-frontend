import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Home.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = (props) => {

	const [usernameField, setUsernameField] = useState('');
	const [userInfo, setUserInfo] = useState([]);
	const BASE_URL = 'http://twitter.local:5000/';

	const onUpdateField = (event) => {
		setUsernameField(event.target.value);
	};

  const onLogin = (event) => {
		event.preventDefault();

		axios({
      method: 'post',
      url: BASE_URL,
      params: {
				username: usernameField,
			},
			headers: {
				"Access-Control-Allow-Origin": "*"
			}
    })
    .then((response) => {
			props.setUserCallback(usernameField);

			// const information = [];
			// console.log(typeof information);
			// for (const trip of response.data.trips) {
			// 	information.push({
			// 		date: trip.date,
			// 		tripCoordinates: trip.coordinates
			// 	});
			// };

			// const information = response.data.trips.map(trip => (
			// 	{
			// 		date: trip.date,
			// 		coordinates: trip.coordinates
			// 	}
			// ));

			// console.log(typeof information);
			// props.setUserInformationCallback(information);
			props.setUserInformationCallback(response.data.trips);
			// setResponseData(response.data);
    })
    .catch((error) => {
      console.log(error);
		});
	};
	
	return (
		<div id="homepage">
			<header>
				<h1>CAPSTONE</h1>
			</header>

			<main>
				<form onSubmit={ onLogin }>
					<input type="text" onChange={ onUpdateField } />
					<input type="submit" value="Login" onClick={ onLogin } />
				</form>
			</main>

			<footer>
				<p>
					Jessica made this.
				</p>
			</footer>
		</div>
	);
};

export default Home;