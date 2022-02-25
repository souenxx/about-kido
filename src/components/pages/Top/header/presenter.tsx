import { FC } from "react";
import styled, { keyframes } from "styled-components";
import { Hello } from "./Hello";
const extendBar = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100vw;
  }
`;

const StyledDiv = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const StyledWrapperDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff8e1;
`;

const StyledWrapperTitleDiv = styled.div`
  position: absolute;
  text-align: center;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

const StyledBarDiv = styled.div`
  height: 10vh;
  margin: 0;
`;

const StyledP = styled.p`
  color: #fff8e1;
  font-size: 80px;
  font-weight: 500;
  margin: 10vh;
  z-index: 1;
  font-family: "Gill Sans", sans-serif;
`;

const forwardColor = "#a0522d";
const backColor = "#cd853f";

const StyledBarForwardBar1Div = styled.div`
  position: absolute;
  left: 0;
  height: 10vh;
  background-color: ${forwardColor};
  top: 0vh;
  animation: ${extendBar} 2s ease forwards;
`;

const StyledBarBackBar1Div = styled.div`
  position: absolute;
  right: 0;
  height: 10vh;
  background-color: ${backColor};
  top: 0vh;
  animation: ${extendBar} 2s ease forwards 2s;
`;

const StyledBarForwardBar2Div = styled.div`
  position: absolute;
  left: 0;
  height: 10vh;
  background-color: ${forwardColor};
  top: 10vh;
  animation: ${extendBar} 2s ease forwards 0.2s;
`;

const StyledBarBackBar2Div = styled.div`
  position: absolute;
  right: 0;
  height: 10vh;
  background-color: ${backColor};
  top: 10vh;
  animation: ${extendBar} 2s ease forwards 2.2s;
`;

const StyledBarForwardBar3Div = styled.div`
  position: absolute;
  left: 0;
  height: 10vh;
  background-color: ${forwardColor};
  top: 20vh;
  animation: ${extendBar} 2s ease forwards 0.4s;
`;

const StyledBarBackBar3Div = styled.div`
  position: absolute;
  right: 0;
  height: 10vh;
  background-color: ${backColor};
  top: 20vh;
  animation: ${extendBar} 2s ease forwards 2.4s;
`;

const StyledBarForwardBar4Div = styled.div`
  position: absolute;
  left: 0;
  height: 10vh;
  background-color: ${forwardColor};
  top: 30vh;
  animation: ${extendBar} 2s ease forwards 0.6s;
`;

const StyledBarBackBar4Div = styled.div`
  position: absolute;
  right: 0;
  height: 10vh;
  background-color: ${backColor};
  top: 30vh;
  animation: ${extendBar} 2s ease forwards 2.6s;
`;

const StyledBarForwardBar5Div = styled.div`
  position: absolute;
  left: 0;
  height: 10vh;
  background-color: ${forwardColor};
  border-bottom: 1px solid ${forwardColor};
  top: 40vh;
  animation: ${extendBar} 2s ease forwards 0.8s;
`;

const StyledBarBackBar5Div = styled.div`
  position: absolute;
  right: 0;
  height: 10vh;
  background-color: ${backColor};
  border-bottom: 1px solid ${backColor};
  top: 40vh;
  animation: ${extendBar} 2s ease forwards 2.8s;
`;

const StyledBarForwardBar6Div = styled.div`
  position: absolute;
  left: 0;
  height: 10vh;
  background-color: ${forwardColor};
  top: 50vh;
  animation: ${extendBar} 2s ease forwards 1s;
`;

const StyledBarBackBar6Div = styled.div`
  position: absolute;
  right: 0;
  height: 10vh;
  background-color: ${backColor};
  top: 50vh;
  animation: ${extendBar} 2s ease forwards 3s;
`;

const StyledBarForwardBar7Div = styled.div`
  position: absolute;
  left: 0;
  height: 10vh;
  background-color: ${forwardColor};
  top: 60vh;
  animation: ${extendBar} 2s ease forwards 1.2s;
`;

const StyledBarBackBar7Div = styled.div`
  position: absolute;
  right: 0;
  height: 10vh;
  background-color: ${backColor};
  top: 60vh;
  animation: ${extendBar} 2s ease forwards 3.2s;
`;

const StyledBarForwardBar8Div = styled.div`
  position: absolute;
  left: 0;
  height: 10vh;
  background-color: ${forwardColor};
  top: 70vh;
  animation: ${extendBar} 2s ease forwards 1.4s;
`;

const StyledBarBackBar8Div = styled.div`
  position: absolute;
  right: 0;
  height: 10vh;
  background-color: ${backColor};
  top: 70vh;
  animation: ${extendBar} 2s ease forwards 3.4s;
`;

const StyledBarForwardBar9Div = styled.div`
  position: absolute;
  left: 0;
  height: 10vh;
  background-color: ${forwardColor};
  top: 80vh;
  animation: ${extendBar} 2s ease forwards 1.6s;
`;

const StyledBarBackBar9Div = styled.div`
  position: absolute;
  right: 0;
  height: 10vh;
  background-color: ${backColor};
  top: 80vh;
  animation: ${extendBar} 2s ease forwards 3.6s;
`;

const StyledBarForwardBar10Div = styled.div`
  position: absolute;
  left: 0;
  height: 10vh;
  background-color: ${forwardColor};
  top: 90vh;
  animation: ${extendBar} 2s ease forwards 1.8s;
`;

const StyledBarBackBar10Div = styled.div`
  position: absolute;
  right: 0;
  height: 10vh;
  background-color: ${backColor};
  top: 90vh;
  animation: ${extendBar} 2s ease forwards 3.8s;
`;

export const HeaderPresenter: FC = () => {
  return (
    <>
      <StyledWrapperDiv>
        <StyledBarDiv>
          <StyledBarForwardBar1Div></StyledBarForwardBar1Div>
          <StyledBarBackBar1Div></StyledBarBackBar1Div>
        </StyledBarDiv>
        <StyledBarDiv>
          <StyledBarForwardBar2Div></StyledBarForwardBar2Div>
          <StyledBarBackBar2Div></StyledBarBackBar2Div>
        </StyledBarDiv>
        <StyledBarDiv>
          <StyledBarForwardBar3Div></StyledBarForwardBar3Div>
          <StyledBarBackBar3Div></StyledBarBackBar3Div>
        </StyledBarDiv>
        <StyledBarDiv>
          <StyledBarForwardBar4Div></StyledBarForwardBar4Div>
          <StyledBarBackBar4Div></StyledBarBackBar4Div>
        </StyledBarDiv>
        <StyledBarDiv>
          <StyledBarForwardBar5Div></StyledBarForwardBar5Div>
          <StyledBarBackBar5Div></StyledBarBackBar5Div>
        </StyledBarDiv>
        <StyledBarDiv>
          <StyledBarForwardBar6Div></StyledBarForwardBar6Div>
          <StyledBarBackBar6Div></StyledBarBackBar6Div>
        </StyledBarDiv>
        <StyledBarDiv>
          <StyledBarForwardBar7Div></StyledBarForwardBar7Div>
          <StyledBarBackBar7Div></StyledBarBackBar7Div>
        </StyledBarDiv>
        <StyledBarDiv>
          <StyledBarForwardBar8Div></StyledBarForwardBar8Div>
          <StyledBarBackBar8Div></StyledBarBackBar8Div>
        </StyledBarDiv>
        <StyledBarDiv>
          <StyledBarForwardBar9Div></StyledBarForwardBar9Div>
          <StyledBarBackBar9Div></StyledBarBackBar9Div>
        </StyledBarDiv>
        <StyledBarDiv>
          <StyledBarForwardBar10Div></StyledBarForwardBar10Div>
          <StyledBarBackBar10Div></StyledBarBackBar10Div>
        </StyledBarDiv>
        <StyledWrapperTitleDiv>
          <StyledP>about me</StyledP>
        </StyledWrapperTitleDiv>
        <StyledDiv>
          <Hello />
        </StyledDiv>
      </StyledWrapperDiv>
    </>
  );
};
