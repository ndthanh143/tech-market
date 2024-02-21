import {axiosInstance} from '../../axios';
import {TSignInPayload, TSignInResponse} from './types';

export const authApi = {
  signIn: async (payload: TSignInPayload) => {
    const {data} = await axiosInstance.post<TSignInResponse>(
      '/api/token',
      payload,
    );

    return data;
  },
};
