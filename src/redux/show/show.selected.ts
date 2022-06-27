import { Store } from '@store/store/store.type';

export const selectShow = (state: Store) => state.show.data;
