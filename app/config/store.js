import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// Ensure that the logger middleware is always the last to be pushed onto the stack
if (process.env.NODE_ENV === 'development') {
    middleware.push(logger)
}

const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store