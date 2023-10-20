import { useMutation } from 'react-query';
import { AXIOS } from '../../config/axios';
import { APIURL } from '../../constants/api';
import { IAddKudosRequest } from '../../types/api.types';
import { ReactQueryKeys } from '../keys';

const fetcher = (data: IAddKudosRequest) =>
  AXIOS.post(APIURL.Kudos, data, {
    baseURL: 'http://localhost:3000'
  });
export const UseAddKudosMutation = () => {
  return useMutation<any, any, IAddKudosRequest, any>(fetcher, {
    mutationKey: ReactQueryKeys.AddKudos
  });
};
