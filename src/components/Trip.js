import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditTripForm from './EditTripForm';
import './Trip.css';

const Trip = ({index, title, date, places, editTripCallback, deleteTripCallback}) => {

	const [toggleEdit, setToggleEdit] = useState(false);

	const allPlaces = places.map((place, index) => {
		return (
			<li key={ index } className="trip_listing_container--place">
				<img src={ place[1] } alt={ place[0] } />
				{ place[0] }
			</li>
		);
	});

	return (
		<section className="trip_listing_container">
			{(toggleEdit === false) ? (
				<section>
					<section className="trip_list_container--header">
						<h2>{ title }</h2>
						<p className="trip_listing_container--date">
							<em>{ date }</em>
						</p>
					</section>
					<h3>Places</h3> 
					<section className="trip_listing_container--places-container">
						{ allPlaces }
					</section>
					<section className="trip_listing_container--buttons">
						<button
							onClick = {() => setToggleEdit(true)}
						>
							Edit
						</button>
						<button 
							onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteTripCallback(index) } }
						>
							Delete
						</button>
					</section>
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