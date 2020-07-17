import React from 'react';
import PropTypes from 'prop-types';
import './Trip.css';

const Trip = ({index, title, date, places, deleteTripCallback}) => {

	return (
		<section className="trip_listing_container">
			<h2>{ title }</h2>
			<p className="trip_listing_container--date">
				<em>{ date }</em>
			</p>
			<h3>Places</h3> 
			<p className="trip_listing_container--places-container">
				{ places }
			</p>
			<button 
				onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteTripCallback(index) } }
				// onClick={()=> deleteTripCallback(index)}
			>
				X
			</button>
		</section>
	);
	
};

export default Trip;