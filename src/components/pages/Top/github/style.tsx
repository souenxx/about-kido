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
  width: 300px;
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
