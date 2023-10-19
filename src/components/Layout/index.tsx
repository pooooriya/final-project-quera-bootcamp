import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { Stack } from '@mui/material';

interface ILayoutProps {}
export const Layout: React.FC<ILayoutProps> = (): JSX.Element => {
  return (
    <>
      <Header />
      <Stack minHeight="70vh">
        <Outlet />
      </Stack>
      <Footer />
    </>
  );
};
