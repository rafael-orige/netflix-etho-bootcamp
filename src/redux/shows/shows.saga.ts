import { call, put, takeLatest } from 'redux-saga/effects';
import showsService from '@services/shows/shows';
import { ShowsReponse } from '@services/shows/shows.type';
import { SagaErrorMessage } from '@enums';
import { setData, setError, setLoading } from './shows.slice';

function* setShows() {
  try {
    yield put(setLoading(true));
    const response: ShowsReponse = yield call(showsService().getShows);

    yield put(setData(response.data));
    yield put(setError(''));
  } catch (exception) {
    yield put(setError(SagaErrorMessage.NOT_AUTHENTICATED));
  } finally {
    yield put(setLoading(false));
  }
}

export const showsSaga = [
  takeLatest('shows/setShows', setShows),
];
