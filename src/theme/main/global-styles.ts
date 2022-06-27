import { createGlobalStyle } from 'styled-components';
import { ThemeType } from 'src/App';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    body {
        font-family: "Open Sans";
        background-color: ${(props) => props.theme.palette.core.secondary};
        color: ${(props) => props.theme.palette.typography.primary};
  }
`;
