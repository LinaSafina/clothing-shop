import { all, call, put, take, takeLatest } from 'typed-redux-saga/macro';

import {
  signInSuccess,
  signInFailure,
  signUpUserSuccess,
  signUpUserFailure,
  signOutUserFailure,
  signOutUserSuccess,
  signUpUserStart,
  checkUserSession,
  signOutUserStart,
  emailSignInStart,
  googleSignInStart,
} from './user.slice';
import {
  getCurrentUser,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
  AdditionalInformation,
} from '../../utils/firebase/firebase.utils';
import { User } from 'firebase/auth';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

//workers
function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalDetails?: AdditionalInformation
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );

    if (userSnapshot) {
      yield* put(
        signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );
    }
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

function* checkUserSessionAsync() {
  try {
    const userAuth = yield* call(getCurrentUser);

    if (userAuth) {
      yield* call(getSnapshotFromUserAuth, userAuth);
    }
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

function* googleSignInAsync() {
  try {
    const { user } = yield* call(signInWithGooglePopup);

    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

function* emailSignInAsync(
  action: PayloadAction<{ email: string; password: string }>
) {
  const {
    payload: { email, password },
  } = action;
  try {
    const userCredential = yield* call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    console.log('here');

    if (userCredential) {
      const { user } = userCredential;

      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

function* signOutUserAsync() {
  try {
    yield* call(signOutUser);

    yield* put(signOutUserSuccess());
  } catch (error) {
    yield* put(signOutUserFailure(error as Error));
  }
}

function* signUpUserAsync(
  action: PayloadAction<{ email: string; password: string; login: string }>
) {
  const {
    payload: { email, password, login },
  } = action;

  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    if (userCredential) {
      const { user } = userCredential;

      yield* put(
        signUpUserSuccess({ user, additionalDetails: { displayName: login } })
      );
    }
  } catch (error) {
    yield* put(signUpUserFailure(error as Error));
  }
}

function* signInAfterSignUpAsync(
  action: PayloadAction<{
    user: User;
    additionalDetails: AdditionalInformation;
  }>
) {
  const {
    payload: { user, additionalDetails },
  } = action;
  try {
    yield* call(getSnapshotFromUserAuth, user, additionalDetails);
  } catch (error) {
    yield* put(signUpUserFailure(error as Error));
  }
}

//watchers
function* onGoogleSignIn() {
  const action = yield* take(googleSignInStart);
  yield* takeLatest(action.type, googleSignInAsync);
}

function* onEmailSignIn() {
  const action = yield* take(emailSignInStart);
  yield* takeLatest(action.type, emailSignInAsync);
}

function* onSignOut() {
  const action = yield* take(signOutUserStart);
  yield* takeLatest(action.type, signOutUserAsync);
}

function* onCheckUserSession() {
  const action = yield* take(checkUserSession);
  yield* takeLatest(action.type, checkUserSessionAsync);
}

function* onSignUp() {
  const action = yield* take(signUpUserStart);
  yield* takeLatest(action.type, signUpUserAsync);
}

function* onSignUpSuccess() {
  const action = yield* take(signUpUserSuccess);
  yield* takeLatest(action.type, signInAfterSignUpAsync);
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onSignOut),
    call(onSignUp),
    call(onSignUpSuccess),
  ]);
}
