import React from 'react';
import PropTypes from 'prop-types';
import Trip from './Trip';

const Trips = (props) => {

	let allTrips = []
	allTrips = props.userInformation.map((trip) => {
		return (
			<Trip
				key={ Math.random() }
				date={ trip.date }
				coordinates= { trip.coordinates }
			/> 
		);
	});
		
	return (
		<div>
			hello ???
			{ console.log(allTrips) }
			{ allTrips }
		</div>
	);
};

export default Trips;