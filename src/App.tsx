import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { KudosGlobalStyle, KudosRtlPlugin, KudosTheme } from './styles/theme';
import { CacheProvider } from '@emotion/react';
import { RouteProvider } from './routes';

const App = (): JSX.Element => {
  return (
    <CacheProvider value={KudosRtlPlugin}>
      <ThemeProvider theme={KudosTheme}>
        <CssBaseline />
        <GlobalStyles styles={KudosGlobalStyle} />
        <RouteProvider />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
