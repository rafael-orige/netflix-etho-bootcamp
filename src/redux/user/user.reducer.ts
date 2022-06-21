import { PayloadAction } from '@reduxjs/toolkit';
import { User } from './user.type';

const setData = (state: User, action: PayloadAction<User>) => {
  state.data = action.payload.data;
};

const reducers = {
  setData,
};

export default reducers;
