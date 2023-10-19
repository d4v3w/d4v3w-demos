import type { Meta, StoryObj } from "@storybook/react";

import { withRouter } from "storybook-addon-react-router-v6";
import { Page } from "./Page";

const meta = {
  title: "Page",
  component: Page,
  decorators: [withRouter],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageLayout: Story = {};
