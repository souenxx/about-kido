import { AppBar } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  margin: 10px 0;
`;

export const FooterPresenter: FC = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#cd853f" }}>
        <StyledDiv>
          <a href="https://github.com/souenxx/about-kido">This site's code</a>
        </StyledDiv>
      </AppBar>
    </>
  );
};
