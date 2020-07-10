import React from 'react';
import PropTypes from 'prop-types';
import Trip from './Trip';

const Trips = (props) => {

	let allTrips = []
	allTrips = props.userInformation.map((trip) => {
		return (
			<Trip
				key={ Math.random() }
				title={ trip.title }
				date={ trip.date }
				places= { trip.places }
			/> 
		);
	});
		
	return (
		<div className='all-trips-container'>
			<h1>Your Trips</h1>
			{ console.log(allTrips) }
			{ allTrips }
		</div>
	);
};

export default Trips;