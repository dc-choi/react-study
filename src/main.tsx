import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App.tsx';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
}
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App name="Log In" name2="Sign up" startName="Get started" />
  </React.StrictMode>,
);
