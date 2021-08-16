import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './mainReducer'; //Import the root reducer

const enhancer = compose(applyMiddleware(thunk));

export default createStore(reducers, enhancer);