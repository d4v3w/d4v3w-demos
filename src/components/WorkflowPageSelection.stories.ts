import type { Meta, StoryObj } from "@storybook/react";

import { CarouselChild } from "./CarouselChild";
import { WorkflowPageSelection } from "./WorkflowPageSelection";

const meta = {
  title: "Workflow/Pages/Selection",
  component: WorkflowPageSelection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof WorkflowPageSelection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WorkflowPageSelectionLaout: Story = {
  args: {
    items: new Array<CarouselChild>(),
    selection: "",
  },
};
