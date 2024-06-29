import { apiSlice } from './apiSlice';
import { USERS_URL } from '../constants';

interface LoginData {
  username: string;
  password: string;
}

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<any, LoginData>({
      query: (data) => ({
        url: 'https://fakestoreapi.com/auth/login',
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation<any, void>({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
} = userApiSlice;
