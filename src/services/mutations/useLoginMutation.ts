import { useMutation } from 'react-query';
import { AXIOS } from '../../config/axios';
import { APIURL } from '../../constants/api';
import { ReactQueryKeys } from '../keys';
import { ILoginRequest, ILoginResponse } from '../../types/api.types';

const fetcher = (data: ILoginRequest): Promise<ILoginResponse> =>
  AXIOS.post(APIURL.Login, data).then((res) => res.data);

export const UseLoginMutation = () => {
  return useMutation<ILoginResponse, any, ILoginRequest, any>(fetcher, {
    mutationKey: ReactQueryKeys.Login
  });
};
