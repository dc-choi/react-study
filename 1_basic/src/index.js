import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <App />
    // </React.StrictMode>
);

/**
 * 여기에 듣지 않은 수업들
 * Immer 를 사용한 더 쉬운 불변성 관리
 * LifeCycle Method
 * componentDidCatch 로 에러 잡아내기 / Sentry 연동
 * 리액트 개발 할 때 사용하면 편리한 도구들 - Prettier, ESLint, Snippet
 */
