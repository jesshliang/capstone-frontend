import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = (props) => {

	const [usernameField, setUsernameField] = useState('');
	const BASE_URL = 'http://twitter.local:5000/';

	const onUpdateField = (event) => {
		setUsernameField(event.target.value);
	};

  const onLogin = (event) => {
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
    .then(() => {
      console.log("SUCCESS");
    })
    .catch((error) => {
      console.log(error);
		});
		
		event.preventDefault();
		props.setUserCallback(usernameField);
	};
	
	return (
		<nav>

			<ul>
				<li>
					{/* <Link to="/map-page">Map</Link> */}
				</li>
			</ul>

			<form className="PlayerSubmissionForm__form" onSubmit={ onLogin }>
				<input type="text" onChange={ onUpdateField } />
				<input type="submit" value="Login" onClick={ onLogin } />
			</form>

		</nav>
	);
};

export default Home;