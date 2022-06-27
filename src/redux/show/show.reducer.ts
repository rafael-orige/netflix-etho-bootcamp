import { SetData, GetShow, SetError } from './show.type';

const getShow: GetShow = (_state, _action) => { };

const setData: SetData = (state, action) => {
  state.data = action.payload;
};

const setError: SetError = (state, action) => {
  state.error = action.payload;
};

const reducers = {
  setData,
  getShow,
  setError,
};

export default reducers;
