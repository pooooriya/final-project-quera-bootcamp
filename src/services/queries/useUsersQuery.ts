import { useQuery } from 'react-query';
import { ReactQueryKeys } from '../keys';
import { AXIOS } from '../../config/axios';
import { APIURL } from '../../constants/api';
import { IUserResponse } from '../../types/api.types';

const fetcher = () =>
  AXIOS.get(APIURL.UserList, {
    baseURL: 'http://localhost:3000'
  }).then((res) => res.data);
export const UseUsersQuery = () => {
  return useQuery<any, any, IUserResponse[]>(ReactQueryKeys.UserList, fetcher);
};
