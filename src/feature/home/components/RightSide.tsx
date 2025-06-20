import { P } from '@/shared/components/P.tsx';
import { Section } from '@/shared/components/Section.tsx';
import { Button } from '@/shared/components/Button.tsx';
import { useNavigate } from 'react-router-dom';

export const RightSide = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate('login');
  };

  const signup = () => {
    navigate('signup');
  };

  return (
    <Section
      styles={'flex flex-col flex-[40%] bg-black justify-center items-center'}
      children={
        <>
          <P style={'text-white text-3xl font-bold'} text={'Get started'} />
          <Section
            styles={'flex mt-4'}
            children={
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
            }
          />
        </>
      }
    />
  );
};
