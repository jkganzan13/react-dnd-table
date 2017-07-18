import React from 'react';
import PropTypes from 'prop-types';

const style = {
	textAlign: 'center',
	border: '1px dotted black',
	height: 100
};

const index = (props) => (
	<div style={style}>
		Body Here
	</div>
);

index.propTypes = {};

export default index