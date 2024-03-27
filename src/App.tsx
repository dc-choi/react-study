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

const App = () => {
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
        <StartedP>Get started</StartedP>
        <ButtonDiv>
          <Button onClick={() => alertFuc('Log In')}>Log in</Button>
          <Button onClick={() => alertFuc('Sign up')}>Sign up</Button>
        </ButtonDiv>
      </Right>
    </Container>
  );
};

export default App;
