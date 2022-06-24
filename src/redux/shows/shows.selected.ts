import { Store } from '@store/store/store.type';

export const showsSelector = (state: Store) => state.shows.data;
