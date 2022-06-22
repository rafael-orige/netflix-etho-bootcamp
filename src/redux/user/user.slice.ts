import { createSlice } from '@reduxjs/toolkit';
import reducers from './user.reducer';
import { Data } from './user.type';

const initialState: Data = {
  data: {},
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers,
});

export default userSlice;
export const { setAuthentication, setData, setError } = userSlice.actions;
