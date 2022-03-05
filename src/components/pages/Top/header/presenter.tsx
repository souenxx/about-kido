import { FC } from "react";
import { Hello } from "./Hello";
import {
  StyledBarBackBarDiv,
  StyledBarDiv,
  StyledBarForwardBarDiv,
  StyledDiv,
  StyledP,
  StyledWrapperDiv,
  StyledWrapperTitleDiv,
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
        {styledValueList.map((styledValue) => (
          <StyledBarDiv>
            <StyledBarForwardBarDiv
              top={styledValue.top}
              delay={styledValue.forwardDelay}
            />
            <StyledBarBackBarDiv
              top={styledValue.top}
              delay={styledValue.backDelay}
            />
          </StyledBarDiv>
        ))}
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
