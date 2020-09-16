import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './redux/reducers/index'
import Routes from './routes';
import logger from 'redux-logger';

let Middlewares = applyMiddleware(thunk,logger);
let store = createStore(reducers,Middlewares);

// const store = createStore(
//   reducers,
//   applyMiddleware(thunk, logger)
// )

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('root')
);


