import { Meta, StoryObj } from "@storybook/react";

import ToggleThemeButton from "../ToggleThemeButton";

const meta: Meta<typeof ToggleThemeButton> = {
  title: "Components/ToggleThemeButton",
  component: ToggleThemeButton,
};

export default meta;

type Story = StoryObj<typeof ToggleThemeButton>;

export const Variant: Story = {
  args: {},
};
