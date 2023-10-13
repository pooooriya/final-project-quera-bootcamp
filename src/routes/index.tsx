import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../components';
import { HomePage } from '../pages';
import AuthenticationPage from '../pages/Authentication';

interface IRouteProviderProps {}
export const RouteProvider: React.FC<IRouteProviderProps> = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/authentication" element={<AuthenticationPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
