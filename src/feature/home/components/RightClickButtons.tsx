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
      <Button className={'px-6 py-2 bg-white text-black rounded-md mr-2'} onClick={login}>
        Log In
      </Button>
      <Button className={'px-6 py-2 bg-white text-black rounded-md'} onClick={signup}>
        Sign Up
      </Button>
    </>
  );
};
