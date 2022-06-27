import {
  SetData, SetError, SetAuthentication, SanitizeAuthentication,
} from './user.type';

const setData: SetData = (state, action) => {
  state.data = action.payload;
};

const setError: SetError = (state, action) => {
  state.error = action.payload;
};

const setAuthentication: SetAuthentication = (_state, _action) => { };

const logoff: SanitizeAuthentication = (_state, _action) => { };

const reducers = {
  setData,
  setError,
  setAuthentication,
  logoff,
};

export default reducers;
