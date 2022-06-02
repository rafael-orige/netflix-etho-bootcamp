import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/main/theme';

import Login from './screens/login/login';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}

export default App;
