import { useState } from "react";
import { data } from "./data/data";
import { Container, Left, LeftP, LeftH2, LeftH2Circle, Right, RightP, RightButton1, RightButton2 } from "./style/App.Style";

const App = () => {
  const [ count, setCount ] = useState(0);
  const [ text, setText ] = useState("");

  const textInverval = setInterval(() => {
    if (count < data.length - 1) setCount(count + 1);
    else setCount(0);

    setText(data[count]);

    clearInterval(textInverval);
  }, 2000);

  return (
    <>
      <Container>
        <Left>
          <LeftH2>ChatGPT <LeftH2Circle /></LeftH2>
          <LeftP>{ text }</LeftP>
        </Left>
        <Right>
          <RightP>Get started</RightP>
          <RightButton1>Log in</RightButton1>
          <RightButton2>Sign up</RightButton2>
        </Right>
      </Container>
    </>
  );
}

export default App;
