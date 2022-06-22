import { call, put, takeLatest } from 'redux-saga/effects';
import userService from '@services/user/user';
import { AuthErrorMessage, AuthResponse, AuthPayload } from '@services/user/user.type';
import { PayloadAction } from '@reduxjs/toolkit';
import userSlice from './user.slice';

function* setAuthentication(action: PayloadAction<AuthPayload>) {
  try {
    const response: AuthResponse = yield call(userService().auth, action.payload);

    yield put(userSlice.actions.setData(response.data));
    yield put(userSlice.actions.setError(''));
  } catch (exception) {
    yield put(userSlice.actions.setError(AuthErrorMessage.UNREACHABLE_AUTHENTICATION));
  }
}

export default function* userSaga() {
  yield takeLatest('user/setAuthentication', setAuthentication);
}
