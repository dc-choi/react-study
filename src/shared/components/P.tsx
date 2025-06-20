import React from 'react';

export const P = ({ style, text }: { style: string; text: string; children?: React.ReactNode }) => {
  return <p className={`${style}`}>{text}</p>;
};
