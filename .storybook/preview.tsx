import { withThemeByClassName } from "@storybook/addon-themes";

import { fontVariables } from "../src/assets/fonts/fonts";

import { withThemeFont } from "./decorators/withFontTheme";

import type { Preview, ReactRenderer } from "@storybook/react";

import "../src/app/globals.css";

export interface FontStrategyConfiguration {
  fontClassNames: string[];
}

export const decorators = [
  withThemeByClassName<ReactRenderer>({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
  withThemeFont({
    fontClassNames: fontVariables,
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators,
};

export default preview;
