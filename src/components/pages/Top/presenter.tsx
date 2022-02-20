import { FC } from "react";
import { Footer } from "./footer";
import { Hello } from "./Hello";
import { Profile } from "./profile";
import { Articles } from "./articles";

export const TopPresenter: FC = () => {
  return (
    <>
      <main>
        <Hello />
        <Profile />
        <Articles />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
