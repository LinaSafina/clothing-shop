// Custom alternative of the logger

import { Middleware } from 'redux';
import { RootState } from '../store';

export const logger: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (!action.type) {
      return next(action);
    }

    console.log('type: ', action.type);
    console.log('payload: ', action.payload);
    console.log('current state: ', store.getState());

    next(action);

    console.log('current state: ', store.getState());
  };
