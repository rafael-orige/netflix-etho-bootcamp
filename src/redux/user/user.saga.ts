import { call, put, takeLatest } from 'redux-saga/effects';
import userService from '@services/user/user';
import { AuthResponse, AuthPayload } from '@services/user/user.type';
import { SagaErrorMessage } from '@enums';
import { PayloadAction } from '@reduxjs/toolkit';
import userSlice, { setData, setError } from './user.slice';

function* setAuthentication(action: PayloadAction<AuthPayload>) {
  try {
    const response: AuthResponse = yield call(userService().auth, action.payload);

    yield put(setData(response.data));
    yield put(setError(''));
  } catch (exception) {
    yield put(setError(SagaErrorMessage.UNREACHABLE_AUTHENTICATION));
  }
}

function* sanitizeAuthentication() {
  const { data } = userSlice.getInitialState();
  yield put(setData(data));
}

export const userSaga = [
  takeLatest('user/setAuthentication', setAuthentication),
  takeLatest('user/logoff', sanitizeAuthentication),
];
