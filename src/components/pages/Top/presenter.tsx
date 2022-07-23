import { FC } from "react";
import { Footer } from "./footer";
import { Profile } from "./profile";
import { Articles } from "./articles";
import { Header } from "./header";
import { Github } from "./github";
import { StyledDiv } from "./style";

export const TopPresenter: FC = () => {
  return (
    <StyledDiv>
      <header>
        <Header />
      </header>
      <main>
        <Profile />
        <Github />
        <Articles />
      </main>
      <footer>
        <Footer />
      </footer>
    </StyledDiv>
  );
};
