import { FC } from "react";
import { GithubPresenter } from "./presenter";
import { useGithub } from "./hooks";

export const Github: FC = () => {
  const props = useGithub();

  return <GithubPresenter {...props} />;
};
