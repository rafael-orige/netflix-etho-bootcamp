import { configureStore } from '@reduxjs/toolkit';
import userSaga from '@store/user/user.saga';
import createSagaMiddleware from 'redux-saga';
import userSlice from '../user/user.slice';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  middleware: [saga],
});

saga.run(userSaga);

export default store;
