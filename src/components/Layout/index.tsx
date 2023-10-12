import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

interface ILayoutProps {}
export const Layout: React.FC<ILayoutProps> = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
