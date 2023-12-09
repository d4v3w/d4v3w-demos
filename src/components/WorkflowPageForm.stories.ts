import type { Meta, StoryObj } from "@storybook/react";

import { WorkflowPageForm } from "./WorkflowPageForm";

const meta = {
  title: "Workflow/Pages/Form",
  component: WorkflowPageForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof WorkflowPageForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WorkflowPageFormLayout: Story = {
  args: {
    name: "My. F. L. Name",
    number: "4111111111111111",
    month: "01",
    year: "2023",
    cvv: "123",
  },
};
