import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from '@store/store/store';
import theme from '@themes/main/theme';

export const component = (componentParameter: JSX.Element) => <Provider store={store}><ThemeProvider theme={theme}>{componentParameter}</ThemeProvider></Provider>;
