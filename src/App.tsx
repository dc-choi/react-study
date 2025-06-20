import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@/feature/home/components/Home.tsx';
import { Login } from '@/feature/login/components/Login.tsx';
import { Signup } from '@/feature/signup/components/Signup.tsx';

/**
 * js의 구조 분해 할당을 사용해서 Props를 함축적으로 사용할 수 있음.
 * TS를 사용하는 경우 타입을 지정해주어야 함.
 */
export const App = () => {
  return (
    <div className="flex h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
