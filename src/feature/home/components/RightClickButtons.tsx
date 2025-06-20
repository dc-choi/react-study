import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/components/Button.tsx';

export const RightClickButtons = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate('login');
  };

  const signup = () => {
    navigate('signup');
  };

  return (
    <>
      <Button
        styles={'px-6 py-2 bg-blue-500 text-white rounded-md hover:text-black mr-2'}
        text={'Log In'}
        fn={login}
      />
      <Button
        styles={'px-6 py-2 bg-blue-500 text-white rounded-md hover:text-black'}
        text={'Sign up'}
        fn={signup}
      />
    </>
  );
};
