import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
}
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
