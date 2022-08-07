import { FC, MouseEventHandler } from "react";
import { StyledButton, StyledDiv } from "./style";

type Props = {
  onClickProfile: () => MouseEventHandler<HTMLDivElement> | undefined;
  onClickContribute: () => MouseEventHandler<HTMLDivElement> | undefined;
  onClickArticle: () => MouseEventHandler<HTMLDivElement> | undefined;
};

export const MenuBarPresenter: FC<Props> = ({
  onClickProfile,
  onClickContribute,
  onClickArticle,
}) => {
  return (
    <StyledDiv>
      <StyledButton onClick={onClickProfile}>profile</StyledButton>
      <StyledButton onClick={onClickContribute}>contributions</StyledButton>
      <StyledButton onClick={onClickArticle}>articles</StyledButton>
    </StyledDiv>
  );
};
