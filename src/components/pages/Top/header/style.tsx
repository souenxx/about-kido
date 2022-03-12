import styled, { keyframes } from "styled-components";
import { sp, shortScreen } from "../../../../media";

export const extendBar = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100vw;
  }
`;

export const StyledHelloDiv = styled.div`
  bottom: 0;
`;

export const StyledWrapperDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #fff8e1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${shortScreen`
    height: 750px;
  `}
  ${sp`
    height: 750px;
  `}
`;

export const StyledWrapperTitleDiv = styled.div`
  position: absolute;
  text-align: center;
  top: 0;
  right: 0;
  left: 0;
`;

export const StyledP = styled.p`
  color: #fff8e1;
  text-align: center;
  font-size: 80px;
  font-weight: 500;
  font-family: "Gill Sans", sans-serif;
  ${sp`
    margin-block-start: 0;
    margin-block-end: 0;
  `}
`;

export const StyledDiv = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 0;
`;

export const StyledBarDiv = styled.div`
  height: 10vh;
  margin: 0;
  ${shortScreen`
    height: 75px;
  `}
  ${sp`
    height: 75px;
  `}
`;

const forwardColor = "#a0522d";
const backColor = "#cd853f";

export const StyledBarForwardBarDiv = styled.div<{
  top: string;
  delay: number;
  index: number;
}>`
  position: absolute;
  left: 0;
  height: 10vh;
  background-color: ${forwardColor};
  top: ${({ top }) => top};
  animation: ${extendBar} 2s ease forwards ${({ delay }) => delay}s;
  ${({ index }) => shortScreen`
    height: 75px;
    top: ${index * 75}px;
  `}
  ${({ index }) => sp`
    height: 75px;
    top: ${index * 75}px;
  `}
`;

export const StyledBarBackBarDiv = styled.div<{
  top: string;
  delay: number;
  index: number;
}>`
  position: absolute;
  right: 0;
  height: 10vh;
  background-color: ${backColor};
  top: ${({ top }) => top};
  animation: ${extendBar} 2s ease forwards ${({ delay }) => delay}s;
  ${({ index }) => shortScreen`
    height: 75px;
    top: ${index * 75}px;
  `}
  ${({ index }) => sp`
    height: 75px;
    top: ${index * 75}px;
  `}
`;
