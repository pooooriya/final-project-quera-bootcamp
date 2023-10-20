import { APIURL } from '../../constants/api';
import { IKudosListResponse } from '../../types/api.types';
import { ReactQueryKeys } from '../keys';
import { AXIOS } from './../../config/axios';
import { useQuery } from 'react-query';

const fetcher = () =>
  AXIOS.get(APIURL.Kudos, {
    baseURL: 'http://localhost:3000'
  }).then((res) => res.data);
export const UseKudosQuery = () => {
  return useQuery<any, any, IKudosListResponse[]>(
    ReactQueryKeys.KudosList,
    fetcher
  );
};
