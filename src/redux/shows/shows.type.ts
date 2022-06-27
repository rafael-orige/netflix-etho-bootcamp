import { ShowCategory } from '@enums';
import { PayloadAction } from '@reduxjs/toolkit';

export type Data = {
  data: {
    list: List,
    myShows: Show[]
  },
  settings: {
    loading: boolean
  },
  error: string
};

export type Show = {
  id: number,
  title: string,
  cover: string,
  director: string,
  actors: string,
  description: string,
  category: ShowCategory,
  episodes: Episode[]
};

export type List = {
  [key: string]: Show[]
};

type Episode = {
  id: number,
  title: string,
  description: string,
  cover: string,
  duration: number,
  show: Omit<Data['data'], 'episodes'>
};

export type BaseReducer<Payload> = (state: Data, action: PayloadAction<Payload>) => void;

export type SetError = BaseReducer<Data['error']>;
export type SetData = BaseReducer<List>;
export type SetUserList = BaseReducer<Show[]>;
export type SetLoading = BaseReducer<Data['settings']['loading']>;
export type SetShows = BaseReducer<undefined>;
export type SetMyList = BaseReducer<undefined>;
