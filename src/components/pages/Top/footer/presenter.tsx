import { AppBar } from "@mui/material";
import { FC } from "react";
import { StyledDiv } from "./style";

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
