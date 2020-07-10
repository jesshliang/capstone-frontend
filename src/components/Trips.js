import React from 'react';
import PropTypes from 'prop-types';
import Trip from './Trip';

const Trips = (props) => {

	let allTrips = []
  if (props.userInformation) {
    allTrips = props.userInformation.map((trip) => {
      return (
				<Trip
					// key={ trip.id }
					date={ trip.date }
					coordinates= { trip.coordinates }
				/> 
      );
    });
	};
		
	return (
		<div>
			hello ???
			{ console.log(allTrips) }
			{ allTrips }
		</div>
	);
};

export default Trips;