// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const Button = ({ styles, text, fn }: { styles: string; text: string; fn: Function }) => {
  return (
    <button className={`${styles}`} onClick={() => fn()}>
      {text}
    </button>
  );
};
