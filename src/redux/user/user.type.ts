import { PayloadAction } from '@reduxjs/toolkit';
import { AuthPayload } from '@services/user/user.type';

export type Data = {
  data: {
    email?: string,
    token?: string,
    refreshToken?: string
  },
  error: string
};

export type User = Data['data'];

type UserReducer<Payload> = (state: Data, action: PayloadAction<Payload>) => void;

export type SetData = UserReducer<User>;

export type SetError = UserReducer<Data['error']>;

export type SetAuthentication = UserReducer<AuthPayload>;

export type SanitizeAuthentication = UserReducer<undefined>;
