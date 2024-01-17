import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: { accentColor: 'orange' },
};

export const Theme = ({ children }) => {
  <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
