import {
  call, put, takeLatest, select, cancel,
} from 'redux-saga/effects';
import { tokenSelector } from '@store/user/user.selected';
import showsService from '@services/shows/shows';
import { ShowsReponse } from '@services/shows/shows.type';
import { SagaErrorMessage } from '@enums';
import {
  setData, setError, setLoading, setUserList,
} from './shows.slice';

function* getShows() {
  yield put(setLoading(true));

  const token: string | undefined = yield select(tokenSelector);

  if (!token) {
    yield put(setError('Token not defined!'));
    yield cancel();
  }

  try {
    const response: ShowsReponse = yield call(showsService(token).getShows);

    const showsList = response.data.reduce((accumulator, show) => {
      // @ts-ignore
      const categoryKey = accumulator[show.category] || [];

      return {
        ...accumulator,
        [show.category]: categoryKey.concat(show),
      };
    }, {});

    yield put(setData(showsList));
    yield put(setError(''));
  } catch (exception) {
    yield put(setError(SagaErrorMessage.NOT_AUTHENTICATED));
  } finally {
    yield put(setLoading(false));
  }
}

function* getMyList() {
  yield put(setLoading(true));

  const token: string = yield select(tokenSelector);

  if (!token) {
    yield put(setError('User token was not found'));
    yield cancel();
  }

  try {
    const response: ShowsReponse = yield call(showsService(token).getMyList);

    yield put(setUserList(response.data));
    yield put(setError(''));
  } catch (exception) {
    yield put(setError('Error'));
  } finally {
    yield put(setLoading(false));
  }
}

export const showsSaga = [
  takeLatest('shows/setShows', getShows),
  takeLatest('shows/setMyList', getMyList),
];
