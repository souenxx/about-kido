import styled, { keyframes } from "styled-components";
export const extendBar = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100vw;
  }
`;

export const extendLastBar = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 85vw;
  }
`;

export const extendLast2Bar = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 90vw;
  }
`;

export const extendLast3Bar = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 95vw;
  }
`;

export const StyledDiv = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const StyledWrapperDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff8e1;
`;

export const StyledWrapperTitleDiv = styled.div`
  position: absolute;
  text-align: center;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

export const StyledBarDiv = styled.div`
  height: 10vh;
  margin: 0;
`;

export const StyledP = styled.p`
  color: #fff8e1;
  font-size: 80px;
  font-weight: 500;
  margin: 10vh;
  z-index: 1;
  font-family: "Gill Sans", sans-serif;
`;

const forwardColor = "#a0522d";
const backColor = "#cd853f";

export const StyledBarForwardBarDiv = styled.div<{
  top: string;
  delay: number;
}>`
  position: absolute;
  left: 0;
  height: 10vh;
  background-color: ${forwardColor};
  top: ${({ top }) => top};
  animation: ${extendBar} 2s ease forwards ${({ delay }) => delay}s;
`;

export const StyledBarBackBarDiv = styled.div<{
  top: string;
  delay: number;
  extendBarType: "normal" | "half";
  index: number;
}>`
  position: absolute;
  right: 0;
  height: 10vh;
  background-color: ${backColor};
  top: ${({ top }) => top};
  animation: ${({ index }) =>
      index === 9
        ? extendLastBar
        : index === 8
        ? extendLast2Bar
        : index === 7
        ? extendLast3Bar
        : extendBar}
    2s ease forwards ${({ delay }) => delay}s;
`;
