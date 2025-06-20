import React from 'react';

export interface Props {
  style?: React.CSSProperties;
  styles?: string;
  text?: string;
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  fn?: Function;
}
