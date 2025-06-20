import React from 'react';

export const H2 = ({
  style,
  text,
  children,
}: {
  style: string;
  text: string;
  children?: React.ReactNode;
}) => {
  return (
    <h2 className={`${style}`}>
      {text}
      {children}
    </h2>
  );
};
