import { FC } from "react";
import { useMenuBar } from "./hooks";
import { MenuBarPresenter } from "./presnter";

export const MenuBar: FC = () => {
  const props = useMenuBar();
  return <MenuBarPresenter {...props} />;
};
