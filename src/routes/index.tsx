import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../components';
import { HomePage } from '../pages';
import AuthenticationPage from '../pages/Authentication';
import PrivateRoute from './PrivateRoute';
import { KudosDetailPage } from '../pages/Kudos/Detail';

interface IRouteProviderProps {}
export const RouteProvider: React.FC<IRouteProviderProps> = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="kudos/:id" element={<KudosDetailPage />} />
        </Route>
        <Route path="/authentication" element={<AuthenticationPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
