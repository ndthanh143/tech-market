import {axiosInstance} from '../../axios';
import {TSignUpPayload} from './types';

const BASE_URL = '/v1/user';

export const userApi = {
  signUp: async (data: TSignUpPayload) => {
    await axiosInstance.post(`${BASE_URL}/signup`, data);
  },
};
