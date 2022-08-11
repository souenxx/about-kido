import styled from "styled-components";

export const StyledScrollDiv = styled.div`
  overflow-x: scroll;
`;

export const StyledWrapperDiv = styled.div`
  text-align: center;
  background-color: #f5f5f5;
`;

export const StyledTitle = styled.p`
  font-size: 50px;
  font-weight: 300;
  font-family: "Gill Sans", sans-serif;
  text-align: center;
`;

export const StyledWeekDiv = styled.div<{ rowIndex: number }>`
  margin: 2px;
`;

export const StyledImg = styled.img`
  width: 450px;
`;

export const StyledDayDiv = styled.div<{ contributionColor: string }>`
  margin: 2px;
  width: 11px;
  height: 11px;
  background: ${({ contributionColor }) => contributionColor};
`;

export const StyledContributionsDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5em 1em;
  margin: 2em 0;
  width: 100%;
`;

export const StyledTotalContributionsDiv = styled.div`
  width: 400px;
`;

export const StyledTotalContributionsP = styled.p`
  position: relative;
  padding: 1rem 2rem calc(1rem + 10px);
  background: #cd853f;
  font-family: "Gill Sans", sans-serif;
  font-weight: bold;
  color: #fff;

  &::before {
    position: absolute;
    top: -7px;
    left: -7px;
    width: 100%;
    height: 100%;
    content: "";
    border: 4px solid #000;
  }
`;

export const StyledConsecutiveDaysDiv = styled.div`
  width: 400px;
  margin: 20px 0;
`;

export const StyledConsecutiveDaysP = styled.p`
  position: relative;
  padding: 1rem 2rem calc(1rem + 10px);
  background: #a0522d;
  font-family: "Gill Sans", sans-serif;
  font-weight: bold;
  color: #fff;

  &::before {
    position: absolute;
    top: -7px;
    left: -7px;
    width: 100%;
    height: 100%;
    content: "";
    border: 4px solid #000;
  }
`;

export const StyledContainerDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledImgDiv = styled.div`
  width: 450px;
`;

export const StyledContributionNumberDiv = styled.div`
  width: 450px;
  margin: auto 0;
`;
