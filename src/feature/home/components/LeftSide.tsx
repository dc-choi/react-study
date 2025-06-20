import { H2 } from '@/shared/components/H2.tsx';
import { PinkCircle } from '@/shared/components/PinkCircle.tsx';
import { Section } from '@/shared/components/Section.tsx';
import { P } from '@/shared/components/P.tsx';
import { useEffect, useRef, useState } from 'react';
import { mock } from '@/feature/home/api/mock.ts';

export const LeftSide = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');

  const handleText = () => {
    if (count < mock.length - 1) setCount(count + 1);
    else setCount(0);

    setText(mock[count]);
  };

  const timeRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timeRef.current = setInterval(handleText, 2000);

    return () => {
      if (timeRef.current) {
        clearInterval(timeRef.current);
        timeRef.current = null;
      }
    };
  }, [count]);

  return (
    <Section
      styles={'flex flex-col flex-[60%] bg-[#210b61] p-5'}
      children={
        <>
          <H2
            style={'text-[#d292ff] text-2xl mb-5 ml-5 flex items-center'}
            text={'ChatGPT'}
            children={<PinkCircle />}
          />
          <Section
            styles={'mt-[33%] ml-8 flex items-center'}
            children={
              <P style={'text-[#d292ff] text-4xl font-bold whitespace-pre-wrap'} text={text} />
            }
          />
        </>
      }
    />
  );
};
