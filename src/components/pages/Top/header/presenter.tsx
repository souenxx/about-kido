import { FC } from "react";
import { Hello } from "./Hello";
import { MenuBar } from "./MenuBar";
import {
  StyledBarBackBarDiv,
  StyledBarDiv,
  StyledBarForwardBarDiv,
  StyledDiv,
  StyledP,
  StyledWrapperDiv,
  StyledHelloDiv,
} from "./style";

export const HeaderPresenter: FC = () => {
  const styledValueList: {
    top: string;
    forwardDelay: number;
    backDelay: number;
  }[] = [...Array(10)].map((_, i) => {
    return {
      top: `${i * 10}vh`,
      forwardDelay: i * 0.2,
      backDelay: i * 0.2 + 2,
    };
  });

  return (
    <>
      <StyledWrapperDiv>
        {styledValueList.map((styledValue, i) => (
          <StyledBarDiv key={i}>
            <StyledBarForwardBarDiv
              top={styledValue.top}
              delay={styledValue.forwardDelay}
              index={i}
            />
            <StyledBarBackBarDiv
              top={styledValue.top}
              delay={styledValue.backDelay}
              index={i}
            />
          </StyledBarDiv>
        ))}
        <StyledDiv>
          <MenuBar />
          <StyledP>about me</StyledP>
          <StyledHelloDiv>
            <Hello />
          </StyledHelloDiv>
        </StyledDiv>
      </StyledWrapperDiv>
    </>
  );
};
