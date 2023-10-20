import { useQuery } from 'react-query';
import { ReactQueryKeys } from '../keys';
import { AXIOS } from '../../config/axios';
import { APIURL } from '../../constants/api';
import { IKudosListResponse } from '../../types/api.types';

const fetcher = (id: string) =>
  AXIOS.get(`${APIURL.Kudos}/${id}`, {
    baseURL: 'http://localhost:3000' // in kar lazem nist
  }).then((res) => res.data);
export const UseKudosDetailQuery = (id: string) => {
  return useQuery<any, any, IKudosListResponse>(
    [ReactQueryKeys.KudosDetail, id],
    () => fetcher(id),
    {
      enabled: !!id // routeprivate =>isAuthenticate
    }
  );
};
