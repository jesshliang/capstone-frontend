import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './NewTripForm.css';

const NewTripForm = (props) => {
	// Form Fields
	const [otherFields, setOtherFields] = useState({
		title: '',
		month: '',
		year: ''
	});
	const [places, setPlaces] = useState([["", ""]]);
	const [toggleAddNew, setToggleAddNew] = useState(false);

	const addPlaceField = (event) => {
		event.preventDefault();
		const newPlaces = [...places];
		newPlaces.push(["", ""]);
		setPlaces(newPlaces);
	}

	const removePlaceField = (event, index) => {
		event.preventDefault();
		const newPlaces = [...places];
		newPlaces.splice(index, 1);
		setPlaces(newPlaces);
	}

	const onPlacesUpdate = (event, index) => {
		const updatedPlaces = [...places];
		updatedPlaces[index][0] = event.target.value;
		setPlaces(updatedPlaces);
	}

	const onPlacesUrlUpdate = (event, index) => {
		const updatedPlaces = [...places];
		updatedPlaces[index][1] = event.target.value;
		setPlaces(updatedPlaces);
	}
	
	const onOtherFieldsUpdate = (event) => {
		const newOtherFields = {...otherFields};
		newOtherFields[event.target.name] = event.target.value;
		setOtherFields(newOtherFields);
	}

	const onSubmit = (event) => {
		event.preventDefault();

		console.log(places);
		console.log(otherFields);
		props.addNewTripCallback(otherFields, places);

		setOtherFields({
			title: '',
			month: '',
			year: ''
		});
		setPlaces([["", ""]]);
	}

	return(
		<div>
		{(toggleAddNew) ? (
			<div className="new_trip_form_container">
				<h2>Add a New Trip</h2>
				<form onSubmit={ onSubmit }>
					<section className="new_trip_form_container--title">
						<label>
							<strong>Title </strong><br />
							<input type="text" value={ otherFields["title"] } name="title" onChange={ onOtherFieldsUpdate } maxLength="26" required />
						</label>
					</section>
					<section className="new_trip_form_container--date">
						<label>
							<strong>Date </strong><br />
							<input type="text" placeholder="month" value={ otherFields["month"] } name="month" onChange={ onOtherFieldsUpdate } pattern="\d*" maxLength="2" required /> /  
							<input type="text" placeholder="year" value={ otherFields["year"] } name="year" onChange={ onOtherFieldsUpdate } pattern="\d*" maxLength="4" required />
						</label>
					</section>
					<section className="new_trip_form_container--places">
						<label>
							<strong>Places </strong><br />
							{
								places.map((place, index) => {
									return (
										<section key={ index }>
											<input type="text" value={ place[0] } onChange={(e) => onPlacesUpdate(e, index) } maxLength="26" required /> 
											<input type="text" value={ place[1] } onChange={(e) => onPlacesUrlUpdate(e, index) } maxLength="100" required />
											<button onClick = {(e) => removePlaceField(e, index) }>X</button>
										</section>
									);
								})
							}
						</label>
					</section>
					<section className="new_trip_form_container--buttons">
						<button onClick={ addPlaceField }>Add Place</button>
						<input type="submit" value="Add New Trip" onSubmit={ onSubmit } />
						<br/>
						<button onClick={() => setToggleAddNew(false)}>
							Cancel
						</button>
					</section>
				</form>
			</div>
			) : (
				<button onClick={() => setToggleAddNew(true)} className="new_trip_form_button">
					Add New Trip
				</button>
			)}
		</div>
	);

};

export default NewTripForm;