import { FC, MouseEventHandler } from "react";

type Props = {
  onClickProfile: () => MouseEventHandler<HTMLDivElement> | undefined;
  onClickContribute: () => MouseEventHandler<HTMLDivElement> | undefined;
  onClickArticle: () => MouseEventHandler<HTMLDivElement> | undefined;
};

export const MenuBarPresenter: FC<Props> = ({
  onClickProfile,
  onClickContribute,
  onClickArticle,
}) => {
  return (
    <div>
      <div onClick={onClickProfile}>profile</div>
      <div onClick={onClickContribute}>contributions</div>
      <div onClick={onClickArticle}>articles</div>
    </div>
  );
};
