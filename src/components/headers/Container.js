import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'react/lib/update';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Card from './Card';
import ItemTypes from './ItemTypes';
import _ from 'lodash';

const style = {
	border: '1px dotted black',
};

const cardTarget = {
	drop() {
	},
};

class Container extends Component {
	constructor(props) {
		super(props);
		this.moveCard = this.moveCard.bind(this);
		this.findCard = this.findCard.bind(this);
		this.state = {
			cards: [{
				id: 1,
				text: 'AAA',
			}, {
				id: 2,
				text: 'BBB',
			}, {
				id: 3,
				text: 'CCC',
			}, {
				id: 4,
				text: 'DDD',
			}, {
				id: 5,
				text: 'EEE',
			}],
		};
	}

	moveCard(id, atIndex) {
		const { card, index } = this.findCard(id);
		this.setState(update(this.state, {
			cards: {
				$splice: [
					[index, 1],
					[atIndex, 0, card],
				],
			},
		}));
	}

	findCard(id) {
		const { cards } = this.state;
		const card = cards.filter(c => c.id === id)[0];

		return {
			card,
			index: cards.indexOf(card),
		};
	}

	render() {
		const { connectDropTarget } = this.props;
		const { cards } = this.state;

		return connectDropTarget(
			<div style={style}>
				{cards.map(card => (
					<Card
						key={card.id}
						id={card.id}
						text={card.text}
						moveCard={this.moveCard}
						findCard={this.findCard}
					/>
				))}
			</div>,
		);
	}
}

Container.propTypes = {
	connectDropTarget: PropTypes.func.isRequired,
};

const Decorators = _.flow(
	DropTarget(ItemTypes.CARD, cardTarget, connect => ({
		connectDropTarget: connect.dropTarget(),
	})),
	DragDropContext(HTML5Backend)
);

export default Decorators(Container);
