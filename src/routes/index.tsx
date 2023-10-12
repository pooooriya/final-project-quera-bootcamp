import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../components';
import { HomePage } from '../pages';

interface IRouteProviderProps {}
export const RouteProvider: React.FC<IRouteProviderProps> = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
