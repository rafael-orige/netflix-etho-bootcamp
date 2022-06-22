import { PayloadAction } from '@reduxjs/toolkit';
import { AuthPayload } from '@services/user/user.type';
import { User, Data } from './user.type';

const setData = (state: Data, action: PayloadAction<User>) => {
  state.data = action.payload;
};

const setError = (state: Data, action: PayloadAction<string>) => {
  state.error = action.payload;
};

const setAuthentication = (_state: Data, _action: PayloadAction<AuthPayload>) => { };

const reducers = {
  setData,
  setError,
  setAuthentication,
};

export default reducers;
