import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@store/store/store';
import theme from '@themes/main/theme';

import { Guard } from '@components';

import Login from '@screens/login/login';
import { LOGIN_URL } from '@screens/login/login.type';

import MovieList from '@screens/movies-list/movies-list';
import { MOVIES_LIST_URL } from '@screens/movies-list/movies-list.type';

import Show from '@screens/show/show';
import { SHOW_URL } from '@screens/show/show.type';

import { GlobalStyles } from '@themes/main/global-styles';

export type ThemeType = typeof theme;

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<Login />} path={LOGIN_URL} />
            <Route element={<Guard><MovieList /></Guard>} path={MOVIES_LIST_URL} />
            <Route element={<Guard><Show /></Guard>} path={SHOW_URL} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
