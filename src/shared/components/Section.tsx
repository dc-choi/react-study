import React from 'react';

export const Section = ({ styles, children }: { styles: string; children?: React.ReactNode }) => {
  return <div className={`${styles}`}>{children}</div>;
};
