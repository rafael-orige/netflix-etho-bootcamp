import { call, put, takeLatest } from 'redux-saga/effects';
import userService from '@services/user/user';
import { SagaErrorMessage } from '@enums';
import { PayloadAction } from '@reduxjs/toolkit';
import userSlice from './user.slice';

function* setAuthentication(action: PayloadAction<AuthPayload>) {
  try {
    const response: AuthResponse = yield call(userService().auth, action.payload);

    yield put(userSlice.actions.setData(response.data));
    yield put(userSlice.actions.setError(''));
  } catch (exception) {
    yield put(setError(SagaErrorMessage.UNREACHABLE_AUTHENTICATION));
  }
}

export default function* userSaga() {
  yield takeLatest('user/setAuthentication', setAuthentication);
}
