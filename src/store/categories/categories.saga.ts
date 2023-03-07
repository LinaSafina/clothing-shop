import { all, call, put, take, takeLatest } from 'typed-redux-saga/macro';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import {
  fetchCategoriesFailure,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from './categories.slice';

//worker
export function* fetchCategoriesAsync() {
  try {
    const categoryArray = yield* call(getCategoriesAndDocuments);

    yield* put(fetchCategoriesSuccess(categoryArray));
  } catch (error) {
    yield* put(fetchCategoriesFailure(error as Error));
  }
}

//watcher
export function* onFetchCategories() {
  const action = yield* take(fetchCategoriesStart);
  yield takeLatest(action.type, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
