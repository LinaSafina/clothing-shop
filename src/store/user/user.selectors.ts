import { createSelector } from 'reselect';
import { RootState } from '../store';

import { UserState } from './user.slice';

export const selectUser = (store: RootState): UserState => store.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
