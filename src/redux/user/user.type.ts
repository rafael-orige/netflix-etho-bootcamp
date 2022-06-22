export type Data = {
  data: {
    email?: string,
    token?: string,
    refreshToken?: string
  },
  error: string
};

export type User = Data['data'];
