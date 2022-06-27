import {
  SetData, SetShows, SetError, SetLoading, SetMyList, SetUserList,
} from './shows.type';

const setShows: SetShows = (_state, _action) => { };

const setMyList: SetMyList = (_state, _action) => { };

const setData: SetData = (state, action) => {
  state.data.list = action.payload;
};

const setUserList: SetUserList = (state, action) => {
  state.data.myShows = action.payload;
};

const setError: SetError = (state, action) => {
  state.error = action.payload;
};

const setLoading: SetLoading = (state, action) => {
  state.settings.loading = action.payload;
};

const reducers = {
  setData,
  setMyList,
  setShows,
  setError,
  setLoading,
  setUserList,
};

export default reducers;
