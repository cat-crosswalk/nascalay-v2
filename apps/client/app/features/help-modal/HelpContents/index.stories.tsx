import styled from "@emotion/styled";
import type { Meta, StoryObj } from "@storybook/react";
import { HelpContents } from ".";

const meta: Meta<typeof HelpContents> = {
  title: "HelpModal/HelpContents",
  component: HelpContents,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof HelpContents>;

const Wrap = styled.div`
  height: 400px;
`;
export const Primary: Story = {
  render: () => (
    <Wrap>
      <HelpContents />
    </Wrap>
  ),
};
