import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Left = styled.div`
  flex: 60%;
  background-color: #210B61;
`;

export const LeftH2 = styled.h2`
  color: #D292FF;
  margin-left: 20px;
`;

export const LeftH2Circle = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #D292FF;
`;

export const LeftP = styled.p`
  position: absolute;
  color: #D292FF;
  top: 40%;
  left: 2%;
  font-size: 40px;
  font-weight: bold;
`;

export const Right = styled.div`
  flex: 40%;
  background-color: #000000;
`;

export const RightP = styled.p`
  position: relative;
  color: #FFFFFF;
  top: 40%;
  left: 40%;
  font-size: 30px;
  font-weight: bold;
`;

export const RightButton1 = styled.button`
  position: relative;
  top: 40%;
  left: 40%;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #007bff;
  color: #ffffff;
`;

export const RightButton2 = styled.button`
  position: relative;
  top: 40%;
  left: 40%;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #007bff;
  color: #ffffff;
`;