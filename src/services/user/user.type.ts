import { AxiosResponse } from 'axios';

export type AuthPayload = {
  email: string,
  password: string
};

export type AuthResponse = AxiosResponse<{
  token: string
}>;
