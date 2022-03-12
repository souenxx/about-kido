import { Card, Avatar, CardMedia, CardContent, Box } from "@mui/material";
import styled from "styled-components";
import { sp } from "../../../../../media";

export const StyledDiv = styled.div`
  width: 400px;
  ${sp`
    width: 90%;
    min-width: 150px;
  `}
`;

export const StyledWrapperDiv = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  z-index: 1;
  ${sp`
    flex-direction: column;
  `}
`;

export const StyledImg = styled.img`
  width: 230px;
`;

export const StyledCard = styled(Card)({
  display: "flex",
  opacity: 1,
});

export const StyledWrapBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f5f5f5",
  width: "50%",
});

export const StyledIconAvatar = styled(Avatar)({
  component: "img",
  height: "35px",
  width: "35px",
});

export const StyledCardMedia = styled(CardMedia)({
  width: "50%",
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
