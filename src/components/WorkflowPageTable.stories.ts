import type { Meta, StoryObj } from "@storybook/react";

import { WorkflowPageTable } from "./WorkflowPageTable";

const meta = {
  title: "Workflow/Pages/Table",
  component: WorkflowPageTable,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof WorkflowPageTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WorkflowPageTableLayout: Story = {
  args: {
    terms: "Qui aliquip minim officia velit anim.",
  },
};
