import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Dialog } from "./Dialog";

const meta = {
  title: "Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DialogStory: Story = {
  args: {
    label: "Default Dialog",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByTestId("dialog-button"), {
      delay: 200,
    });
    await userEvent.click(canvas.getByTestId("dialog-close-button"), {
      delay: 500,
    });
    await userEvent.click(canvas.getByTestId("dialog-button"), {
      delay: 500,
    });
  },
};
export const PrimaryDialog: Story = {
  args: {
    label: "Primary Dialog",
    primary: true,
  },
};

export const LargePrimaryDialog: Story = {
  args: {
    label: "Large Primary Dialog",
    primary: true,
    size: "large",
  },
};
export const SmallPrimaryDialog: Story = {
  args: {
    label: "Small Primary Dialog",
    primary: true,
    size: "small",
  },
};
