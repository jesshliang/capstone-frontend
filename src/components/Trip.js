import React from 'react';
import PropTypes from 'prop-types';
import './Trip.css';

const Trip = (props) => {

	return (
		<section className="trip_listing_container">
			<h2>{ props.title }</h2>
			<p className="trip_listing_container--date">
				<em>{ props.date }</em>
			</p>
			<h3>Places</h3> 
			<p className="trip_listing_container--places-container">
				{ props.places }
			</p>
		</section>
	);
	
};

export default Trip;