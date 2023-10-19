import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { KudosGlobalStyle, KudosRtlPlugin, KudosTheme } from './styles/theme';
import { CacheProvider } from '@emotion/react';
import { RouteProvider } from './routes';
import { QueryClientProvider } from 'react-query';
import { QueryClientStore } from './services/queryClient';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Toaster } from 'react-hot-toast';
import { AppContextProvider } from './context/store';

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={QueryClientStore}>
      <AppContextProvider>
        <CacheProvider value={KudosRtlPlugin}>
          <ThemeProvider theme={KudosTheme}>
            <CssBaseline />
            <GlobalStyles styles={KudosGlobalStyle} />
            <RouteProvider />
            <ReactQueryDevtools initialIsOpen={false} />
            <Toaster />
          </ThemeProvider>
        </CacheProvider>
      </AppContextProvider>
    </QueryClientProvider>
  );
};

export default App;
