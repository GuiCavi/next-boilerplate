import { useEffect } from "react";

import { FontStrategyConfiguration } from "../preview";

export const withThemeFont = ({
  fontClassNames,
}: FontStrategyConfiguration) => {
  return (storyFn) => {
    useEffect(() => {
      const parentElement = document.querySelector("body");

      if (!parentElement) {
        return;
      }

      parentElement.classList.add(...fontClassNames);
    }, []);

    return storyFn();
  };
};
