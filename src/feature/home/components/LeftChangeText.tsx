import { P } from '@/shared/components/P.tsx';
import { useEffect, useRef, useState } from 'react';
import { mock } from '@/feature/home/api/Mock.ts';

export const LeftChangeText = () => {
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

  return <P styles={'text-[#d292ff] text-4xl font-bold whitespace-pre-wrap'} text={text} />;
};
