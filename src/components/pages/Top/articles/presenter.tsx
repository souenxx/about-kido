import { FC } from "react";
import styled from "styled-components";
export const ArticlesPresenter: FC = () => {
  const StyledUl = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding-left: 0;
  `;

  const StyledImage = styled.img`
    height: 200px;
  `;

  const StyledImgDiv = styled.div`
    width: 334px;
    height: 220px;
    margin: 0 auto 20px auto;
    text-align: center;
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

  const StyledList = styled.ul`
    list-style-type: none;
    max-width: 500px;
  `;

  const StyledListItem = styled.li`
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

  const StyledWrapperDiv = styled.div`
    margin-bottom: 80px;
  `;

  return (
    <StyledWrapperDiv>
      <StyledTitle>articles</StyledTitle>
      <StyledUl>
        <li>
          <StyledSubTitle>qiita</StyledSubTitle>
          <StyledImgDiv>
            <StyledImage src="./favicon.png" />
          </StyledImgDiv>
          <StyledList>
            <StyledListItem>
              <a href="https://qiita.com/s_kido14/items/d506805b40da3eb514ad">
                React DnDをタッチデバイス対応にしてみる
              </a>
            </StyledListItem>
          </StyledList>
        </li>
        <li>
          <StyledSubTitle>others ...</StyledSubTitle>
          <StyledImgDiv>
            <StyledImage src="./creative_color.png" />
          </StyledImgDiv>
          <StyledList>
            <StyledListItem>
              <a href="https://note.com/tabelog_frontend/n/n7499d31eee37">
                食べログFEチームに新卒エンジニアが飛び込んでみた学び
              </a>
            </StyledListItem>
          </StyledList>
        </li>
      </StyledUl>
    </StyledWrapperDiv>
  );
};
