import { createStore } from 'redux';
import reducers from '../reducers';

function configureStore(initialState = {}) {
	const store = createStore(reducers, initialState,
		window.devToolsExtension && window.devToolsExtension());

	return store;
}

export default configureStore;