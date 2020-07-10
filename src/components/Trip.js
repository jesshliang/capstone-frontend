import React from 'react';
import PropTypes from 'prop-types';

const Trip = (props) => {

	return (
		<section>
			<ul>
				<li>
					Date: { props.date }
				</li>
				<li>
					Places: { props.coordinates.length }
				</li>
			</ul>
		</section>
	);
	
};

export default Trip;