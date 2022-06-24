import {
  SetData, SetShows, SetError, SetLoading,
} from './shows.type';

const setShows: SetShows = (_state, _action) => { };

const setData: SetData = (state, action) => {
  state.data = action.payload;
};

const setError: SetError = (state, action) => {
  state.error = action.payload;
};

const setLoading: SetLoading = (state, action) => {
  state.settings.loading = action.payload;
};

const reducers = {
  setData,
  setShows,
  setError,
  setLoading,
};

export default reducers;
