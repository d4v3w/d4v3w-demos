import type { Meta, StoryObj } from "@storybook/react";

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

export const DefaultDialog: Story = {
  args: {
    label: "Default Dialog",
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
