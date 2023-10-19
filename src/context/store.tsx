// Implement Context With Flux Design Pattern

import { createContext, useEffect, useReducer } from 'react';
import {
  IAppContext,
  IAppContextState,
  IContextAction
} from './types/context.type';
import { UserReducer } from './user/user.reducer';
import { LogoutUser, ReJoinUser } from './user/user.action';
import { AXIOS } from '../config/axios';
import { UseRefreshToken } from '../services/mutations/useRefreshToken';
import { APIURL } from '../constants/api';

const initialState: IAppContextState = {
  user: {
    username: '',
    email: '',
    access: '',
    first_name: '',
    last_name: '',
    refresh: '',
    thumbnail: '',
    user_id: 0,
    phone_number: ''
  }
};

const combineReducer = (
  { user }: IAppContextState,
  action: IContextAction<any, any>
) => ({
  user: UserReducer(user, action)
});

export const AppContext = createContext<IAppContext>({
  state: initialState,
  dispatch: () => null
});

const thunkMiddleware = (dispatch: any) => (action: any) => {
  if (typeof action === 'function') {
    return action(dispatch);
  }
  return dispatch(action);
};

interface IAppContextProviderProps extends React.PropsWithChildren {}
export const AppContextProvider: React.FC<IAppContextProviderProps> = ({
  children
}): JSX.Element => {
  const [state, dispatch] = useReducer(combineReducer, initialState);
  const dispatchWithMiddleware = thunkMiddleware(dispatch);
  const refreshTokenMutation = UseRefreshToken();

  // register interceptors => state => context !!!!!

  AXIOS.interceptors.response.use(
    (resp) => resp,
    (error) => {
      if (error?.response?.status === 401) {
        const refresh = localStorage.getItem('refreshToken');
        // access token man dg valid nist => ya nadadm accesstoken , ya expire
        // call refresh token => seda beznm
        if (refresh) {
          refreshTokenMutation.mutate(
            {
              refresh
            },
            {
              onSuccess: (res) => {
                localStorage.setItem('accessToken', res.access);
                dispatchWithMiddleware(ReJoinUser());
              },
              onError: () => {
                dispatchWithMiddleware(LogoutUser());
              }
            }
          );
        } else {
          dispatchWithMiddleware(LogoutUser());
        }
      }
    }
  );

  useEffect(() => {
    dispatchWithMiddleware(ReJoinUser());
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch: dispatchWithMiddleware
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
