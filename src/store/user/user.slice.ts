import { createSlice } from '@reduxjs/toolkit/dist';

import {
  AdditionalInformation,
  UserData,
} from '../../utils/firebase/firebase.utils';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { User } from 'firebase/auth';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_VALUE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: INITIAL_VALUE,
  reducers: {
    checkUserSession(state) {},
    signOutUserStart(state) {
      state.isLoading = true;
    },
    signUpUserStart(
      state,
      action: PayloadAction<{ email: string; password: string; login: string }>
    ) {
      state.isLoading = true;
    },
    emailSignInStart(
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) {
      state.isLoading = true;
    },
    googleSignInStart(state) {
      state.isLoading = true;
    },
    signInSuccess(state, action: PayloadAction<UserData & { id: string }>) {
      state.currentUser = action.payload;
      state.isLoading = false;
    },
    signOutUserSuccess(state) {
      state.currentUser = null;
      state.isLoading = false;
    },
    signUpUserSuccess(
      state,
      action: PayloadAction<{
        user: User;
        additionalDetails: AdditionalInformation;
      }>
    ) {},
    signInFailure(state, action: PayloadAction<Error>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    signUpUserFailure(state, action: PayloadAction<Error>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    signOutUserFailure(state, action: PayloadAction<Error>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const userReducer = userSlice.reducer;
export const {
  checkUserSession,
  googleSignInStart,
  emailSignInStart,
  signInSuccess,
  signInFailure,
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
  signUpUserStart,
  signUpUserSuccess,
  signUpUserFailure,
} = userSlice.actions;
