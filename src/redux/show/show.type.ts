import { Show } from '@store/shows/shows.type';
import { PayloadAction } from '@reduxjs/toolkit';

export type Data = {
  data: Show,
  error: string
};

export type BaseReducer<Payload> = (state: Data, action: PayloadAction<Payload>) => void;

export type SetData = BaseReducer<Data['data']>;
export type GetShow = BaseReducer<string>;
export type SetError = BaseReducer<Data['error']>;
