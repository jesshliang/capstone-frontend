import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditTripForm from './EditTripForm';
import './Trip.css';

const Trip = ({index, title, date, places, editTripCallback, deleteTripCallback}) => {

	const [toggleEdit, setToggleEdit] = useState(false);

	return (
		<section className="trip_listing_container">
			{(toggleEdit === false) ? (
				<section>
				<h2>{ title }</h2>
				<p className="trip_listing_container--date">
					<em>{ date }</em>
				</p>
				<h3>Places</h3> 
				<p className="trip_listing_container--places-container">
					{ places }
				</p>
				<p>
					<button
						onClick = {() => setToggleEdit(true)}
					>
						Edit
					</button>
					<button 
						onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteTripCallback(index) } }
					>
						X
					</button>
				</p>
				</section>
			) : ( 
				<EditTripForm 
					key={ index }
					index={ index }
					title={ title } 
					date={ date }
					tripPlaces={ places }
					editTripCallback = { editTripCallback }
					setToggleEdit = { setToggleEdit }
				/>
			)}
		</section>
	);
	
};

export default Trip;