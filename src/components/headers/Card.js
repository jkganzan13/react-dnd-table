import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import _ from 'lodash';

const style = {
	border: '1px dashed gray',
	padding: '0.5rem 1rem',
	marginBottom: '.5rem',
	backgroundColor: 'white',
	cursor: 'move',
};

const cardSource = {
	beginDrag(props) {
		return {
			id: props.id,
			originalIndex: props.findCard(props.id).index,
		};
	},

	endDrag(props, monitor) {
		const { id: droppedId, originalIndex } = monitor.getItem();
		const didDrop = monitor.didDrop();

		if (!didDrop) {
			props.moveCard(droppedId, originalIndex);
		}
	},
};

const cardTarget = {
	canDrop() {
		return false;
	},

	hover(props, monitor) {
		const { id: draggedId } = monitor.getItem();
		const { id: overId } = props;

		if (draggedId !== overId) {
			const { index: overIndex } = props.findCard(overId);
			props.moveCard(draggedId, overIndex);
		}
	},
};

class Card extends Component {
	static propTypes = {
		connectDragSource: PropTypes.func.isRequired,
		connectDropTarget: PropTypes.func.isRequired,
		isDragging: PropTypes.bool.isRequired,
		id: PropTypes.any.isRequired,
		text: PropTypes.string.isRequired,
		moveCard: PropTypes.func.isRequired,
		findCard: PropTypes.func.isRequired,
	};

	render() {
		const { text, isDragging, connectDragSource, connectDropTarget } = this.props;
		const opacity = isDragging ? 0 : 1;

		return connectDragSource(connectDropTarget(
			<div style={{ ...style, opacity }}>
				{text}
			</div>,
		));
	}
}

const Decorators = _.flo
export default Card