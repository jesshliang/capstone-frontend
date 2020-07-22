import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './EditTripForm.css';

const EditTripForm = ({index, title, date, tripPlaces, editTripCallback, setToggleEdit}) => {
	// Form Fields
	const [otherFields, setOtherFields] = useState({
		title: title,
		date: date,
	});
	const [places, setPlaces] = useState(tripPlaces);

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
		setToggleEdit(false);
		editTripCallback(otherFields, places, index)
	}

	return(
		<div className="edit_trip_form_container">
			<h2>Edit</h2>
			<form onSubmit={ onSubmit }>
				<section className="edit_trip_form_container--title">
					<label>
						<strong>Title </strong><br />
						<input 
							type="text" 
							value={ otherFields["title"] } 
							name="title" 
							onChange={ onOtherFieldsUpdate } 
							maxLength="26" 
							required />
					</label>
				</section>
				<section className="edit_trip_form_container--date">
					<label>
						<strong>Date </strong><br />
						<input 
							type="text" 
							value={ otherFields["date"] } 
							name="date" 
							onChange={ onOtherFieldsUpdate } 
							pattern="\d{1,2}-\d{4}" 
							maxLength="7" 
							required />
					</label>
				</section>
				<section className="edit_trip_form_container--places">
					<label>
						<strong>Places </strong><br />
						{
							places.map((place, index) => {
								return (
									<section key={ index }>
										<input 
											type="text" value={ place[0] } 
											onChange={(e) => onPlacesUpdate(e, index) } 
											placeholder="name of place" 
											required /> 
										<input 
											type="text" value={ place[1] } 
											onChange={(e) => onPlacesUrlUpdate(e, index) } 
											placeholder="image url"
										  required />
										<button onClick = {(e) => removePlaceField(e, index) }>X</button>
									</section>
								);
							})
						}
					</label>
				</section>
				<section className="edit_trip_form_container--buttons">
					<button onClick={ addPlaceField }>Add Place</button>
					<button onClick={() => setToggleEdit(false)}>Close</button>
					<input type="submit" value="Save" onSubmit={ onSubmit } />
				</section>
			</form>
		</div>
	);

};

EditTripForm.propTypes = {
	index: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	places: PropTypes.array.isRequired,
	editTripCallback: PropTypes.func.isRequired,
	setToggleEdit: PropTypes.func.isRequired
}

export default EditTripForm;