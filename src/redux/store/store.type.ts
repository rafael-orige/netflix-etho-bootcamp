import store from './store';

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type Action<Payload> = {
  type: string,
  payload: Payload
};
