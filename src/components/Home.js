import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => {

	const [usernameField, setUsernameField] = useState({ username: '' });

	const onUpdateField = (event) => {
    const updatedUsername = {...usernameField};
    updatedUsername[event.target.name] = event.target.value;
		setUsernameField(updatedUsername);
		console.log(usernameField);
	};
	
	const onLogin = (event) => {
		event.preventDefault(); // Prevents form from trying to send to non-existent server.

		console.log(usernameField);
	};

	return (
		<nav>

			<ul>
				<li>
					<Link to="/map-page">Map</Link>
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