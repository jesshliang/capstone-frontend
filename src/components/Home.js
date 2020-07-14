import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Home.css';

const Home = (props) => {

	const [usernameField, setUsernameField] = useState('');
	const BASE_URL = 'http://twitter.local:5000/';

	const onUpdateField = (event) => {
		setUsernameField(event.target.value.toLowerCase());
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