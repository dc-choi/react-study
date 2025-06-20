import { Props } from '@/shared/constants/Props.ts';

export const P = ({ style, text }: Props) => {
  return <p className={`${style}`}>{text}</p>;
};
