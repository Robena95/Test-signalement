import { DefaultTheme } from 'styled-components';

const defaultTheme: DefaultTheme = {
  borderRadius: '8px',
  font: {
    main: "'Gilroy', sans-serif",
  },
  textColor: {
    main: '#000000',
    secondary: '#98B2D1',
    secondaryPink: '#C74375',
    dark: '#071B25',
    gray: '#8C8C8C',
    white: '#FFFFFF',
    link: '#248AE9',
  },
  palette: {
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    primary: {
      main: '#E02B59',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#001126',
      contrastText: '#FFFFFF',
    },
  },
  layout: {
    header: {
      bg: '#FFFFFF',
      color: '#FFFFFF',
      height: '60px',
    },
    content: {
      bg: '#FFFFFF',
    },
  },
};

export default defaultTheme;
