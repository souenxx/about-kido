import styled from "styled-components";
import { FC } from "react";

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding-left: 0;
`;

const StyledList = styled.ul`
  list-style-type: none;
  max-width: 500px;
`;

const StyledListItem = styled.li`
  font-size: 16px;
  position: relative;
  line-height: 1.8;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0.6em;
    left: -1.5em;
    width: 16px;
    height: 8px;
    border-left: 4px solid #9c9c9c;
    border-bottom: 4px solid #9c9c9c;
    transform: rotate(-45deg);
  }
`;

const StyledTitle = styled.p`
  font-size: 50px;
  font-weight: 300;
  font-family: "Gill Sans", sans-serif;
  text-align: center;
`;

const StyledSubTitle = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: gray;
  font-family: "Gill Sans", sans-serif;
`;

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
