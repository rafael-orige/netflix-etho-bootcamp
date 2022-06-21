import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from '../theme/main/theme';
import store from '../redux/store/store';

const component = (componentParameter: JSX.Element) => <Provider store={store}><ThemeProvider theme={theme}>{componentParameter}</ThemeProvider></Provider>;

export default component;
