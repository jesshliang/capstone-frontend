import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const NewTripForm = (props) => {

	const [otherFields, setOtherFields] = useState({
		title: '',
		month: '',
		year: ''
	});
	const [places, setPlaces] = useState([]);

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

	const onAddNewTrip = (event) => {
		event.preventDefault();

		console.log(places);
		console.log(otherFields);

		axios({
      method: 'post',
      url: "http://twitter.local:5000/trips",
      params: {
				username: props.currentUser,
				date: `${otherFields["month"]}-${otherFields["year"]}`,
				title: otherFields["title"],
				places: places
			},
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
				"Access-Control-Allow-Headers": "Origin, X-Auth-Token, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
			}
    })
    .then((response) => {
			console.log(response.data.trips);
			props.setUserInformationCallback(response.data.trips);

			setOtherFields({
				title: '',
				month: '',
				year: ''
			});
			setPlaces([]);

			console.log( props.userInformation );
			console.log( props.coordinates );
    })
    .catch((error) => {
      console.log(error);
		});
	}

	return(
		<div>
			<h2>Add a New Trip</h2>
			<form onSubmit={ onAddNewTrip }>
				<label>
					Title:<br />
					<input type="text" value={ otherFields["title"] } name="title" onChange={ onOtherFieldsUpdate }/>
				</label>
				<label>
					Date:<br />
					<input type="text" placeholder="month" value={ otherFields["month"] } name="month" onChange={ onOtherFieldsUpdate }/> / 
					<input type="text" placeholder="year" value={ otherFields["year"] } name="year" onChange={ onOtherFieldsUpdate } />
				</label>
				<label>
					Places:<br />
					{
						places.map((place, index) => {
							return (
								<section key={ index }>
									<input type="text" value={ place[0] } onChange={(e) => onPlacesUpdate(e, index) } />
									<input type="text" value={ place[1] } onChange={(e) => onPlacesUrlUpdate(e, index) } />
									<button onClick = {(e) => removePlaceField(e, index) }>X</button>
								</section>
							);
						})
					}
				</label>
					<br />
					<button onClick={ addPlaceField }>Add Place</button>
					<input type="submit" value="Add New Trip" onSubmit={ onAddNewTrip } />
				</form>
		</div>
	);

};

export default NewTripForm;