import React from 'react';
import PropTypes from 'prop-types';

const Trip = (props) => {

	return (
		<section>
			<ul>
				<li>
					Title: { props.title }
				</li>
				<li>
					Date: { props.date }
				</li>
				<li>
					Places: { props.places }
				</li>
			</ul>
		</section>
	);
	
};

export default Trip;