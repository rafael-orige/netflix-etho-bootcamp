import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme/main/theme';

export const component = (componentParameter: JSX.Element) => <ThemeProvider theme={theme}>{componentParameter}</ThemeProvider>;
