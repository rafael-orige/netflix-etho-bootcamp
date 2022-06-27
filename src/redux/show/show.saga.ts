import { PayloadAction } from '@reduxjs/toolkit';
import { tokenSelector } from '@store/user/user.selected';
import {
  call, put, takeLatest, cancel, select,
} from 'redux-saga/effects';

import showsService from '@services/shows/shows';
import { ShowResponse } from '@services/shows/shows.type';
import { setData, setError } from './show.slice';

function* getShow(action: PayloadAction<string>) {
  const token: string | undefined = yield select(tokenSelector);

  if (!token) {
    yield put(setError('Token not defined!'));
    yield cancel();
  }

  try {
    const response: ShowResponse = yield call(showsService(token).getShow, action.payload);

    yield put(setData(response.data));
  } catch (exception) {
    setError('Error');
  }
}

export const showSaga = [
  takeLatest('show/getShow', getShow),
];
