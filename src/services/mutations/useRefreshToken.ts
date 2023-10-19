import { useMutation } from 'react-query';
import { AXIOS } from '../../config/axios';
import { APIURL } from '../../constants/api';
import {
  IRefreshTokenRequest,
  IRefreshTokenResponse
} from '../../types/api.types';
import { ReactQueryKeys } from '../keys';

const fetcher = (data: IRefreshTokenRequest) =>
  AXIOS.post(APIURL.RefreshToken, data).then((res) => res.data);

export const UseRefreshToken = () => {
  return useMutation<IRefreshTokenResponse, any, IRefreshTokenRequest, any>(
    fetcher,
    {
      mutationKey: ReactQueryKeys.Refresh
    }
  );
};
