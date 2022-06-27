import { createSlice } from '@reduxjs/toolkit';
import { ShowCategory } from '@enums';
import reducers from './show.reducer';
import { Data } from './show.type';

const initialState: Data = {
  data: {
    id: 0,
    title: '',
    cover: '',
    director: '',
    actors: '',
    description: '',
    category: ShowCategory.MOVIE,
    episodes: [],
  },
  error: '',
};

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers,
});

export default showSlice;
export const { setData, setError, getShow } = showSlice.actions;
