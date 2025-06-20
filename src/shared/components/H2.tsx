import { Props } from '@/shared/constants/Props.ts';

export const H2 = ({ styles, text, children }: Props) => {
  return (
    <h2 className={`${styles}`}>
      {text}
      {children}
    </h2>
  );
};
