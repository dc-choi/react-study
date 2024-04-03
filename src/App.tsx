import { useEffect, useRef, useState } from 'react';
import { data } from '@/data/data';
import {
  Container,
  Left,
  ChangedP,
  GptH2,
  GptH2Circle,
  Right,
  StartedP,
  Button,
  ChangedDiv,
  ButtonDiv,
} from '@/style/App.Style';
import { IApp } from './@types/app';

/**
 * js의 구조 분해 할당을 사용해서 Props를 함축적으로 사용할 수 있음.
 * TS를 사용하는 경우 타입을 지정해주어야 함.
 */
const App = ({ name, name2, startName }: IApp) => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');

  const timeRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timeRef.current = setInterval(handleText, 2000);

    return () => {
      clearInterval(timeRef.current);
    };
  }, [count]);

  const handleText = () => {
    if (count < data.length - 1) setCount(count + 1);
    else setCount(0);

    setText(data[count]);
  };

  const alertFuc = (str: string) => {
    // eslint-disable-next-line no-alert
    alert(str);
  };

  return (
    <Container>
      <Left>
        <GptH2>
          ChatGPT <GptH2Circle />
        </GptH2>
        <ChangedDiv>
          <ChangedP>{text}</ChangedP>
        </ChangedDiv>
      </Left>
      <Right>
        <StartedP>{startName === `Get started` ? startName : `is Not ${startName}`}</StartedP>
        <ButtonDiv>
          <Button onClick={() => alertFuc(name)}>{name}</Button>
          <Button onClick={() => alertFuc(name2)}>{name2}</Button>
        </ButtonDiv>
      </Right>
    </Container>
  );
};

export default App;
