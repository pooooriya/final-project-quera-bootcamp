import { createTheme } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import type { GlobalStylesProps } from '@mui/material';
export const KudosColors = {
  primary: {
    100: '#ccdce4',
    200: '#99b9c8',
    300: '#6696ad',
    400: '#337391',
    500: '#005076',
    600: '#00405e',
    700: '#003047',
    800: '#00202f',
    900: '#001018'
  },
  secondary: {
    100: '#fce7d3',
    200: '#f9cfa8',
    300: '#f7b87c',
    400: '#f4a051',
    500: '#f18825',
    600: '#c16d1e',
    700: '#915216',
    800: '#60360f',
    900: '#301b07'
  },
  info: {
    100: '#cce8ee',
    200: '#99d2dc',
    300: '#66bbcb',
    400: '#33a5b9',
    500: '#008ea8',
    600: '#007286',
    700: '#005565',
    800: '#003943',
    900: '#001c22'
  },
  grey: {
    100: '#ffffff',
    200: '#F7FAFD',
    300: '#E1EEF5',
    400: '#7A7A7A',
    500: '#808080',
    600: '#666666',
    700: '#4d4d4d',
    800: '#333333',
    900: '#000000'
  }
};
export const KudosTheme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Vazirmatn',
    allVariants: {
      color: 'black'
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: KudosColors.primary[500],
      light: KudosColors.primary[100],
      dark: KudosColors.primary[700],
      contrastText: '#ffffff'
    },
    secondary: {
      main: KudosColors.secondary[500],
      light: KudosColors.secondary[100],
      dark: KudosColors.secondary[700],
      contrastText: '#ffffff'
    },
    info: {
      main: KudosColors.info[500],
      light: KudosColors.secondary[100],
      dark: KudosColors.secondary[700],
      contrastText: '#ffffff'
    }
  }
});

export const KudosRtlPlugin = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin]
});

export const KudosGlobalStyle: GlobalStylesProps['styles'] = {
  '*': {
    textDecoration: 'none',
    fontFamily: 'Vazirmatn'
  }
};
