import { ShowCategory } from '@enums';
import { PayloadAction } from '@reduxjs/toolkit';

export type Data = {
  data: Show[],
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

type Episode = {
  id: number,
  title: string,
  description: string,
  cover: string,
  duration: number,
  show: Omit<Data['data'], 'episodes'>
};

export type ShowPayload<Payload> = (state: Data, action: PayloadAction<Payload>) => void;

export type SetError = ShowPayload<Data['error']>;
export type SetData = ShowPayload<Show[]>;
export type SetLoading = ShowPayload<Data['settings']['loading']>;
export type SetShows = ShowPayload<undefined>;
