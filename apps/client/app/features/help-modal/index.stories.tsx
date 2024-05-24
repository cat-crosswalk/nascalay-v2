import type { Meta, StoryObj } from "@storybook/react";
import { HelpModal } from ".";

const meta: Meta<typeof HelpModal> = {
  title: "HelpModal",
  component: HelpModal,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof HelpModal>;

export const Primary: Story = {};
