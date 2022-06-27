import { Store } from '@store/store/store.type';

export const showsSelector = (state: Store) => state.shows.data.list;
export const myListSelector = (state: Store) => state.shows.data.myShows;
