import { createSlice } from '@reduxjs/toolkit';
import reducers from './shows.reducers';
import { Data } from './shows.type';

const initialState: Data = {
  data: {
    list: {},
    myShows: [],
  },
  settings: {
    loading: false,
  },
  error: '',
};

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers,
});

export default showsSlice;
export const {
  setData, setError, setShows, setLoading, setUserList, setMyList,
} = showsSlice.actions;
