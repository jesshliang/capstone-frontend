import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTripForm = () => {
	
	const [places, setPlaces] = useState([]);

	const addPlaceField = (event) => {
		event.preventDefault();
		const newPlaces = [...places];
		newPlaces.push("");
		setPlaces(newPlaces);
	}

	const removePlaceField = (event, index) => {
		event.preventDefault();
		const newPlaces = [...places];
		newPlaces.splice(index, 1);
		setPlaces(newPlaces);
	}

	const onFieldUpdate = (event, index) => {
		const updatedPlaces = [...places];
		updatedPlaces[index] = event.target.value;
		setPlaces(updatedPlaces);
		console.log(places);
	}
	
	return(
		<div>
			<h2>Add a New Trip</h2>
			<form>
				<label>
					Title:<br />
					<input type="text" />
				</label>
				<label>
					Date:<br />
					<input type="text" placeholder="month" /> / <input type="text" placeholder="year" />
				</label>
				<label>
					Places:<br />
					{
						places.map((place, index) => {
							return (
								<section key={ index }>
									<input key={ index } type="text" value={ place } onChange={(e) => onFieldUpdate(e, index) } />
									<button onClick = {(e) => removePlaceField(e, index) }>X</button>
								</section>
							);
						})
					}
				</label>
					<br />
					<button onClick={ addPlaceField }>Add Place</button>
					<input type="submit" value="Add New Trip" />
				</form>
		</div>
	);

};

export default NewTripForm;