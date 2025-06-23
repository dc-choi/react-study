import { Circle } from '@/shared/components/Circle.tsx';
import { LeftChangeText } from '@/feature/home/components/LeftChangeText.tsx';

export const LeftSide = () => {
  return (
    <div
      className={'flex flex-col flex-[60%] p-5'}
      children={
        <>
          <h2
            className={'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'}
          >
            My Own Style
            <Circle />
          </h2>
          <div className={'mt-[33%] ml-8 flex items-center'} children={<LeftChangeText />} />
        </>
      }
    />
  );
};
