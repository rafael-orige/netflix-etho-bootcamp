import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/main/theme';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './screens/login/login';
import { LOGIN_URL } from './screens/login/login.type';

import MovieList from './screens/movies-list/movies-list';
import { MOVIES_LIST_URL } from './screens/movies-list/movies-list.type';

import { GlobalStyles } from './theme/main/global-styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<Login />} path={LOGIN_URL} />
            <Route element={<MovieList />} path={MOVIES_LIST_URL} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App;
