import { AXIOS } from '../../config/axios';
import { IUserState } from '../types/context.type';
import { UserActionTypes } from './user.actiontype';

export const AuthenticateUser = (payload: IUserState) => (dispatch: any) => {
  // 1.Update Context Api
  dispatch({
    type: UserActionTypes.USER_LOGGED_IN,
    payload
  });
  // 2.save tokens in desire way in browser
  localStorage.setItem('accessToken', payload.access);
  localStorage.setItem('refreshToken', payload.refresh);
  localStorage.setItem(
    'user',
    JSON.stringify({
      email: payload.email,
      first_name: payload.first_name,
      last_name: payload.last_name,
      phone_number: payload.phone_number,
      thumbnail: payload.thumbnail,
      user_id: payload.user_id,
      username: payload.username
    })
  );
  // 3.set default header to all axios requests !
  AXIOS.defaults.headers.common.Authorization = `Bearer ${payload.access}`;
};

export const ReJoinUser = () => (dispatch: any) => {
  //1. check token exist in browser
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const user = localStorage.getItem('user');

  if (accessToken && refreshToken && user) {
    // 1.dispatch user info
    const userPayload = JSON.parse(user);
    dispatch({
      type: UserActionTypes.USER_LOGGED_IN,
      payload: {
        accessToken,
        refreshToken,
        ...userPayload
      }
    });
    // 2. set axios
    AXIOS.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    AXIOS.defaults.headers.common.Authorization = '';
  }
};
