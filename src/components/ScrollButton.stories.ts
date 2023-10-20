import type { Meta, StoryObj } from "@storybook/react";

import { userEvent, within } from "@storybook/testing-library";
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

export const ScrollButtonLeft: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByTestId("scroll-left"));
  },
};
export const ScrollButtonRight: Story = {
  args: {
    direction: Direction.Right,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByTestId("scroll-right"));
  },
};
