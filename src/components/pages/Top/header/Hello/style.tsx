import { Card, Avatar, CardMedia, CardContent, Box } from "@mui/material";
import styled from "styled-components";
export const StyledDiv = styled.div``;

export const StyledWrapperDiv = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

export const StyledImg = styled.img`
  width: 250px;
  margin-right: 40px;
`;

export const StyledCard = styled(Card)({
  display: "flex",
  opacity: 1,
});

export const StyledWrapBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f5f5f5",
  width: 220,
  height: 220,
});

export const StyledIconAvatar = styled(Avatar)({
  component: "img",
  height: "35px",
  width: "35px",
});

export const StyledCardMedia = styled(CardMedia)({
  width: 190,
  height: 220,
  alt: "my-profile-image",
});

export const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  pl: 1,
  pb: 1,
});

export const StyledCardContent = styled(CardContent)({
  flex: "1 0 auto",
});
