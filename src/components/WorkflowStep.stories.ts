import type { Meta, StoryObj } from "@storybook/react";

import { WorkflowStep, WorkflowStepType } from "./WorkflowStep";

const meta = {
  title: "Workflow/WorkflowStep",
  component: WorkflowStep,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof WorkflowStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WorkflowStepDefault: Story = {
  args: {
    type: WorkflowStepType.Default,
  },
};

export const WorkflowStepForm: Story = {
  args: {
    type: WorkflowStepType.Form,
    title: "Workflow Step Form",
    children: [],
  },
};

export const WorkflowStepTable: Story = {
  args: {
    type: WorkflowStepType.Table,
  },
};

export const WorkflowStepSelection: Story = {
  args: {
    type: WorkflowStepType.Selection,
    title: "Workflow Step Selection",
    children: [],
  },
};
