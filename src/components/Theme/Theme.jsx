import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: { accentColor: 'orange' },
};

export const Theme = () => {
  <ThemeProvider theme={theme}></ThemeProvider>;
};
