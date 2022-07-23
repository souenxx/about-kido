import styled from "styled-components";

export const StyledContributionsDiv = styled.div`
  display: flex;
  margin: auto;
`;

export const StyledWrapperDiv = styled.div``;

export const StyledTitle = styled.p`
  font-size: 50px;
  font-weight: 300;
  font-family: "Gill Sans", sans-serif;
  text-align: center;
`;

export const StyledWeekDiv = styled.div<{ rowIndex: number }>`
  margin: 2px;
`;

export const StyledDayDiv = styled.div`
  margin: 2px;
  width: 11px;
  height: 11px;
  background: gray;
`;
