import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {} from '../actions';
import Headers from '../components/headers';
import Body from '../components/body';

const titleStyle = {
	textAlign: 'center'
};

const tableStyle = {
	margin: 'auto',
	width: 512,
};

const AppContainer = (props) => (
	<div>
		<h3 style={titleStyle}>React DND Table</h3>
		<div style={tableStyle}>
			<Headers/>
			<Body/>
		</div>
	</div>
);

AppContainer.propTypes = {
	//insert propTypes here
};

const mapStateToProps = (state) => ({
	//insert props here
});

const mapDispatchToProps = (dispatch) => {
	const actions = {
		//insert actions here
	};
	return { actions: bindActionCreators(actions, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);