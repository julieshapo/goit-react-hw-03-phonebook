import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App.jsx';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    text: '#212121',
    black: '#000',
    white: '#fff',
    gray: '#707070',
    lightGray: '#f3f4f3',
    accent: 'tomato',
    green: 'green',
    red: 'orangeRed',
    lightBlue: '#14acdf',
    error: 'red',
    blue: '#4d4dff',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
