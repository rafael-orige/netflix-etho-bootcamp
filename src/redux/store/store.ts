import { configureStore } from '@reduxjs/toolkit';
import { userSaga } from '@store/user/user.saga';
import { showsSaga } from '@store/shows/shows.saga';
import { showSaga } from '@store/show/show.saga';
import createSagaMiddleware from 'redux-saga';
import userSlice from '@store/user/user.slice';
import showsSlice from '@store/shows/shows.slice';
import showSlice from '@store/show/show.slice';
import { all } from 'redux-saga/effects';

const saga = createSagaMiddleware();

function* storeSaga() {
  yield all([
    ...userSaga,
    ...showsSaga,
    ...showSaga,
  ]);
}

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    shows: showsSlice.reducer,
    show: showSlice.reducer,
  },
  middleware: [saga],
});

saga.run(storeSaga);

export default store;
