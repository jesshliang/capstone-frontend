import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MapPage from './MapPage';
import axios from 'axios';

const Dashboard = (props) => {
	// useEffect(() => {
  //   axios.get('http://twitter.local:5000/user', { params: { username: props.currentUser } })
  //     .then((response) => {
  //       console.log(response.data);
  //       props.setUserInformationCallback(response.data.username);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
	// }, []);

	return (
		<div>
			<header>
				<nav>
					<p>

						username: { props.currentUser } <br />
						trips: { props.userInformation[0].coordinates } <br />
						{ console.log(props.userInformation[0]) }
					</p>
					<button onClick={ props.onLogoutCallback }>Log Out</button>
				</nav>
			</header>

			<MapPage />
		</div>
	);
	
};

export default Dashboard;