import { H2 } from '@/shared/components/H2.tsx';
import { PinkCircle } from '@/shared/components/PinkCircle.tsx';
import { Section } from '@/shared/components/Section.tsx';
import { LeftChangeText } from '@/feature/home/components/LeftChangeText.tsx';

export const LeftSide = () => {
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
          <Section styles={'mt-[33%] ml-8 flex items-center'} children={<LeftChangeText />} />
        </>
      }
    />
  );
};
