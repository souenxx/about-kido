import { FC, useState } from "react";
import {
  Card,
  Avatar,
  IconButton,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Box,
} from "@mui/material";
import styled from "styled-components";
const StyledDiv = styled.div``;

const StyledWrapperDiv = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 250px;
  margin-right: 40px;
`;

export const HelloPresenter: FC = () => {
  return (
    <>
      <StyledWrapperDiv>
        <StyledImg src="./businesscard_suit_man_mono.png" />
        <StyledDiv>
          <Card sx={{ display: "flex", opacity: 1 }} variant="outlined">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#f5f5f5",
                width: 220,
                height: 220,
              }}
            >
              <CardContent sx={{ flex: "1 0 auto" }}>
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
              </CardContent>
              <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
                <CardActions disableSpacing>
                  <a href="https://github.com/souenxx">
                    <IconButton aria-label="add to favorites">
                      <Avatar
                        src="GitHub-Mark-64px.png"
                        sx={{ height: "35px", width: "35px" }}
                      />
                    </IconButton>
                  </a>
                  <a href="https://twitter.com/s_kido14">
                    <IconButton aria-label="add to favorites">
                      <Avatar
                        src="Twitter social icons - circle - blue.png"
                        sx={{ height: "35px", width: "35px" }}
                      />
                    </IconButton>
                  </a>
                  <a href="https://qiita.com/s_kido14">
                    <IconButton aria-label="add to favorites">
                      <Avatar
                        src="favicon.png"
                        sx={{ height: "35px", width: "35px" }}
                      />
                    </IconButton>
                  </a>
                </CardActions>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 190, height: 220 }}
              image="IMG_6553.jpg"
              alt="Live from space album cover"
            />
          </Card>
        </StyledDiv>
      </StyledWrapperDiv>
    </>
  );
};
