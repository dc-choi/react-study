import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  weight: 100vh;
  height: 100vh;
`;

export const Left = styled.div`
  flex: 60%;
  display: flex;
  flex-direction: column;
  background-color: #210b61;
`;

export const GptH2 = styled.h2`
  color: #d292ff;
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const GptH2Circle = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #d292ff;
`;

export const ChangedDiv = styled.div`
  margin: 0;
  margin-left: 30px;
  margin-top: 33%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ChangedP = styled.p`
  margin: 0;
  border: 0;
  color: #d292ff;
  font-size: 40px;
  font-weight: bold;
  white-space: pre-wrap;
`;

export const Right = styled.div`
  flex: 40%;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StartedP = styled.p`
  margin: 0;
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
`;

export const ButtonDiv = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.button`
  margin: 0;
  margin-right: 10px;
  padding: 10px 30px;
  color: #ffffff;
  background-color: #007bff;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;
