import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@store/store/store';
import theme from '@themes/main/theme';

import Login from '@screens/login/login';
import { LOGIN_URL } from '@screens/login/login.type';

import MovieList from '@screens/movies-list/movies-list';
import { MOVIES_LIST_URL } from '@screens/movies-list/movies-list.type';

import { GlobalStyles } from './theme/main/global-styles';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<Login />} path={LOGIN_URL} />
            <Route element={<MovieList />} path={MOVIES_LIST_URL} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
