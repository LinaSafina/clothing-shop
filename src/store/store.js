import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

//Custom alternative of the logger

// const logger = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }

//   console.log('type: ', action.type);
//   console.log('payload: ', action.payload);
//   console.log('current state: ', store.getState());

//   next(action);

//   console.log('current state: ', store.getState());
// };

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
