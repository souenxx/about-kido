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
    extendBarType: "normal" | "half";
  }[] = [...Array(10)].map((_, i) => {
    return {
      top: `${i * 10}vh`,
      forwardDelay: i * 0.2,
      backDelay: i * 0.2 + 2,
      extendBarType: "normal",
    };
  });

  return (
    <>
      <StyledWrapperDiv>
        {styledValueList.map((styledValue, i) => (
          <StyledBarDiv>
            <StyledBarForwardBarDiv
              top={styledValue.top}
              delay={styledValue.forwardDelay}
            />
            <StyledBarBackBarDiv
              top={styledValue.top}
              delay={styledValue.backDelay}
              extendBarType={styledValue.extendBarType}
              index={i}
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
