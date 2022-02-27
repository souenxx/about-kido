import { FC } from "react";
import {
  StyledImage,
  StyledImgDiv,
  StyledList,
  StyledListItem,
  StyledSubTitle,
  StyledTitle,
  StyledUl,
  StyledWrapperDiv,
} from "./style";

export const ArticlesPresenter: FC = () => {
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
