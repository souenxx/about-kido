import { FC } from "react";
import { Footer } from "./footer";
import { Profile } from "./profile";
import { Articles } from "./articles";
import { Header } from "./header";

export const TopPresenter: FC = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Profile />
        <Articles />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
