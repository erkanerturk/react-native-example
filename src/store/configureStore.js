import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import placesReducer from './reducers/places';
import uiReducer from './reducers/ui';
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
  places: placesReducer,
  ui: uiReducer,
  auth: authReducer,
});

let composeEnhancers = compose;
let middleware = applyMiddleware(thunk);

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => createStore(rootReducer, composeEnhancers(middleware));

export default configureStore;
