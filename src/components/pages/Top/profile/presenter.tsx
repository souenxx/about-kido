import { FC } from "react";
import {
  StyledList,
  StyledListItem,
  StyledSubTitle,
  StyledTitle,
  StyledUl,
} from "./style";

export const ProfilePresenter: FC = () => {
  return (
    <div>
      <StyledTitle>profile</StyledTitle>
      <StyledUl>
        <li>
          <StyledSubTitle>self introduction</StyledSubTitle>
          <StyledList>
            <StyledListItem>My name is Shunsuke Kido</StyledListItem>
            <StyledListItem>
              A Web engineer in restaurant search site
            </StyledListItem>
            <StyledListItem>
              Love React/TypeScript and Disney, watching soccer
            </StyledListItem>
            <StyledListItem>This is my contact information</StyledListItem>
          </StyledList>
        </li>
        <li>
          <StyledSubTitle>history</StyledSubTitle>
          <StyledList>
            <StyledListItem>
              2015/04 - 2019/03: B.A. in Faculty of Engineering, Kumamoto
              University, Kumamoto/Japan empasised on Computer Science and
              Electrical Engineering
            </StyledListItem>
            <StyledListItem>
              2019/04 - 2021/03: M.A. in Graduate School of Social and Cultural,
              Kumamoto University, Kumamoto/Japan concentrated on Computer
              Science and Electrical Engineering
            </StyledListItem>
            <StyledListItem>2021/04 - current: Kakaku.com, Inc.</StyledListItem>
          </StyledList>
        </li>
      </StyledUl>
    </div>
  );
};
