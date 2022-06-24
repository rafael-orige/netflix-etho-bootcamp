import { AxiosResponse } from 'axios';
import { Show } from '@store/shows/shows.type';

export type ShowsReponse = AxiosResponse<Show[]>;
