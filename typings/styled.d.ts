// styled.d.ts
import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    font: {
      main: string;
    };
    textColor: {
      main: string;
      secondary: string;
      secondaryPink: string;
      dark: string;
      gray: string;
      white: string;
      link: string;
    };
    palette: {
      common: {
        black: string;
        white: string;
      };
      primary: IPalette;
      secondary: IPalette;
    };
    layout: {
      header: {
        bg: string;
        color: string;
        height: string;
      };
      content: {
        bg: string;
      };
    };
  }
}
