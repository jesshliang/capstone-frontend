import React from 'react';
import PropTypes from 'prop-types';

const Trip = (props) => {

	return (
		<section>
			<h2>Title: { props.title }</h2>
			<p>
				<strong>Date:</strong> { props.date }
			</p>
			<p>
				<strong>Places:</strong> { props.places }
			</p>
		</section>
	);
	
};

export default Trip;