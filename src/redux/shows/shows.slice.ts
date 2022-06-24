import { createSlice } from '@reduxjs/toolkit';
import { ShowCategory } from '@enums';
import reducers from './shows.reducers';
import { Data } from './shows.type';

const initialState: Data = {
  data: [{
    id: 0,
    title: '',
    cover: '',
    director: '',
    actors: '',
    description: '',
    category: ShowCategory.MOVIE,
    episodes: [],
  }],
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
  setData, setError, setShows, setLoading,
} = showsSlice.actions;
