import type { Meta, StoryObj } from "@storybook/react";

import { WorkflowPageDefault } from "./WorkflowPageDefault";

const meta = {
  title: "Workflow/Pages/Default",
  component: WorkflowPageDefault,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof WorkflowPageDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WorkflowPageDefaultLaout: Story = {
  args: {
    title: "test",
  },
};
