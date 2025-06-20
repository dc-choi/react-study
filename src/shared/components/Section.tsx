import { Props } from '@/shared/constants/Props.ts';

export const Section = ({ styles, children }: Props) => {
  return <div className={`${styles}`}>{children}</div>;
};
