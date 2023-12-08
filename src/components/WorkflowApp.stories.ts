import type { Meta, StoryObj } from "@storybook/react";

import { WorkflowApp } from "./WorkflowApp";

const meta = {
  title: "WorkflowApp",
  component: WorkflowApp,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof WorkflowApp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultWorkflowApp: Story = {
  args: {
    content: {},
  },
};
