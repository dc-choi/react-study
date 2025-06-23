import { RightClickButtons } from '@/feature/home/components/RightClickButtons.tsx';

export const RightSide = () => {
  return (
    <div
      className={'flex flex-col flex-[40%] bg-black justify-center items-center'}
      children={
        <>
          <p className={'text-white text-3xl font-bold'}>Get started</p>
          <div className={'flex mt-4'} children={<RightClickButtons />} />
        </>
      }
    />
  );
};
