import React from 'react';
import PropTypes from 'prop-types';
import Trip from './Trip';
import './Trips.css';


const Trips = (props) => {
	
	let allTrips = []
	allTrips = props.userInformation.map((trip, index) => {
		return (
			<Trip
				key={ index }
				index={ index }
				title={ trip.title }
				date={ trip.date }
				places= { trip.places }
				editTripCallback = { props.editTripCallback }
				deleteTripCallback = { props.deleteTripCallback }
			/> 
		);
	});
		
	return (
		<div className='all-trips-container'>
			<h1>Your Trips</h1>
			{ allTrips }
		</div>
	);
};

export default Trips;