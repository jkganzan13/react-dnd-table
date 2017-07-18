import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {} from '../actions';

const AppContainer = (props) => (
	<div>Insert Content Here!</div>
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