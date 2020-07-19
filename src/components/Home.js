import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TwitterLogin from "react-twitter-login";
import axios from 'axios';
import './Home.css';

const Home = (props) => {

	const authHandler = (err, data) => {
		console.log(err, data);
		console.log(data.screen_name);

		axios({
      method: 'post',
      url: 'http://twitter.local:5000/',
      params: {
				username: data.screen_name,
			},
			headers: {
				"Access-Control-Allow-Origin": "*"
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
					callbackUrl={'https://the-travel-mapp.herokuapp.com/'}
				/>
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