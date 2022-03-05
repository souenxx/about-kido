import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding-left: 0;
`;

export const StyledList = styled.ul`
  list-style-type: none;
  max-width: 500px;
`;

export const StyledListItem = styled.li`
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

export const StyledTitle = styled.p`
  font-size: 50px;
  font-weight: 300;
  font-family: "Gill Sans", sans-serif;
  text-align: center;
`;

export const StyledSubTitle = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  color: gray;
  font-family: "Gill Sans", sans-serif;
`;
