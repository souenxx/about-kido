import styled from "styled-components";
import { sp } from "../../../../media";
export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding-left: 0;
  ${sp`
    flex-direction: column;
  `}
`;

export const StyledImage = styled.img`
  height: 200px;
`;

export const StyledImgDiv = styled.div`
  width: 334px;
  height: 220px;
  margin: 0 auto 20px auto;
  text-align: center;
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

export const StyledList = styled.ul`
  list-style-type: none;
  max-width: 500px;
`;

export const StyledListItem = styled.li`
  font-family: "Gill Sans", sans-serif;
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
  &:hover {
    color: #cd853f;
    cursor: pointer;
  }
`;

export const StyledWrapperDiv = styled.div`
  margin-bottom: 80px;
`;
