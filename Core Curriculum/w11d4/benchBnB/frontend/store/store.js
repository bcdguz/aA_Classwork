import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers/root_reducer'

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(myThunk, logger))
}


const myThunk = store => next => action => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState)
    } else {
        return next(action);
    }
}

export default configureStore;