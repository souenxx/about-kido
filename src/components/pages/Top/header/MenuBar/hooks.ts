import { MouseEventHandler } from "react";

export const useMenuBar = (): {
  onClickProfile: () => MouseEventHandler<HTMLDivElement> | undefined;
  onClickContribute: () => MouseEventHandler<HTMLDivElement> | undefined;
  onClickArticle: () => MouseEventHandler<HTMLDivElement> | undefined;
} => {
  const getElementTop = (elementId: string): any => {
    if (typeof document === "undefined") {
      return undefined;
    }
    const ElementTop = document
      .getElementById(elementId)
      ?.getBoundingClientRect().top;
    console.log(ElementTop);
    return window.scrollTo({ top: ElementTop, behavior: "smooth" });
  };

  return {
    onClickProfile: () => getElementTop("profile-div"),
    onClickContribute: () => getElementTop("contribute-div"),
    onClickArticle: () => getElementTop("article-div"),
  };
};
