import type { Meta, StoryObj } from "@storybook/react";

import { Direction, ScrollButton } from "./ScrollButton";

const meta = {
  title: "ScrollButton",
  component: ScrollButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ScrollButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ScrollButtonLeft: Story = {};
export const ScrollButtonRight: Story = {
  args: {
    direction: Direction.Right,
  },
};
