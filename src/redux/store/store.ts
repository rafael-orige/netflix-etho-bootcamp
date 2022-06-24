import { configureStore } from '@reduxjs/toolkit';
import { userSaga } from '@store/user/user.saga';
import { showsSaga } from '@store/shows/shows.saga';
import createSagaMiddleware from 'redux-saga';
import userSlice from '@store/user/user.slice';
import showsSlice from '@store/shows/shows.slice';
import { all } from 'redux-saga/effects';

const saga = createSagaMiddleware();

function* storeSaga() {
  yield all([
    ...userSaga,
    ...showsSaga,
  ]);
}

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    shows: showsSlice.reducer,
  },
  middleware: [saga],
});

saga.run(storeSaga);

export default store;
