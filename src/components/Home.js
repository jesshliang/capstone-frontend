import React from 'react';
import PropTypes from 'prop-types';
import TwitterLogin from "react-twitter-login";
import axios from 'axios';
import './Home.css';

const Home = (props) => {

	const authHandler = (err, data) => {
		axios({
      method: 'post',
      url: 'https://the-travel-mapp.herokuapp.com/users',
      params: {
				username: data.screen_name,
			},
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
				"Access-Control-Allow-Headers": "Origin, X-Auth-Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
			}
    })
    .then((response) => {
			props.setUserCallback(data.screen_name);
			props.setUserInformationCallback(response.data.trips);
    })
    .catch((error) => {
      console.log(error);
		});
	};
	
	return (
		<div id="homepage">
			<header>
				<h1>the travel mApp</h1>
			</header>

			<main>
				<TwitterLogin
					authCallback={authHandler}
					consumerKey={process.env.REACT_APP_TWITTER_KEY}
					consumerSecret={process.env.REACT_APP_TWITTER_SECRET}
					callbackUrl={'https://the-travel-mapp.herokuapp.com'}
					// callbackUrl={'http://twitter.local:3000/'}
				/>
			</main>

			<footer>
				<p>
					An application for logging and visualizing<br />your travels and adventures!
				</p>
			</footer>
		</div>
	);
	
};

Home.propTypes = {
	setUserCallback: PropTypes.func.isRequired,
	setUserInformationCallback: PropTypes.func.isRequired
};

export default Home;