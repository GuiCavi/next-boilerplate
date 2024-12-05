import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/components/**/*.stories.tsx"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-themes"],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: (config) => {
    config.resolve?.modules?.push(`${process.cwd()}/src`);

    return config;
  },
  typescript: {
    reactDocgenTypescriptOptions: {
      // Speeds up Storybook build time
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      // Only compile files that have stories for faster local development performance
      include: ["src/**/*.{ts,tsx}"],
    },
    reactDocgen: "react-docgen",
  },
};
export default config;
