import { P } from '@/shared/components/P.tsx';
import { Section } from '@/shared/components/Section.tsx';
import { RightClickButtons } from '@/feature/home/components/RightClickButtons.tsx';

export const RightSide = () => {
  return (
    <Section
      styles={'flex flex-col flex-[40%] bg-black justify-center items-center'}
      children={
        <>
          <P styles={'text-white text-3xl font-bold'} text={'Get started'} />
          <Section styles={'flex mt-4'} children={<RightClickButtons />} />
        </>
      }
    />
  );
};
