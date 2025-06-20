import { Props } from '@/shared/constants/Props.ts';

export const Button = ({ styles, text, fn = () => {} }: Props) => {
  return (
    <button className={`${styles}`} onClick={() => fn()}>
      {text}
    </button>
  );
};
