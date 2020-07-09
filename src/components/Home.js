import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = (props) => {

	const [usernameField, setUsernameField] = useState('');

	const onUpdateField = (event) => {
		setUsernameField(event.target.value);
	};

  const onLogin = (event) => {
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