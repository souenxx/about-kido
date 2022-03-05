import { FC } from "react";
import { IconButton, Typography, CardActions } from "@mui/material";
import {
  StyledDiv,
  StyledImg,
  StyledWrapperDiv,
  StyledBox,
  StyledCard,
  StyledCardContent,
  StyledCardMedia,
  StyledIconAvatar,
  StyledWrapBox,
} from "./style";

export const HelloPresenter: FC = () => {
  return (
    <>
      <StyledWrapperDiv>
        <StyledImg src="./businesscard_suit_man_mono.png" />
        <StyledDiv>
          <StyledCard variant="outlined">
            <StyledWrapBox>
              <StyledCardContent>
                <Typography component="div" variant="h6">
                  Kido
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  component="div"
                >
                  I'm a web application developer. I love React/TypeScript.
                </Typography>
              </StyledCardContent>
              <StyledBox>
                <CardActions disableSpacing>
                  <a href="https://github.com/souenxx">
                    <IconButton aria-label="github-icon">
                      <StyledIconAvatar src="GitHub-Mark-64px.png" />
                    </IconButton>
                  </a>
                  <a href="https://twitter.com/s_kido14">
                    <IconButton aria-label="twitter-icon">
                      <StyledIconAvatar src="Twitter social icons - circle - blue.png" />
                    </IconButton>
                  </a>
                  <a href="https://qiita.com/s_kido14">
                    <IconButton aria-label="qiita-icon">
                      <StyledIconAvatar src="favicon.png" />
                    </IconButton>
                  </a>
                </CardActions>
              </StyledBox>
            </StyledWrapBox>
            <StyledCardMedia image="IMG_6553.jpg" />
          </StyledCard>
        </StyledDiv>
      </StyledWrapperDiv>
    </>
  );
};
