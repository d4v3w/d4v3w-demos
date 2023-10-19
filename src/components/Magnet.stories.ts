import type { Meta, StoryObj } from "@storybook/react";

import { Magnet, MagnetType } from "./Magnet";

const meta = {
  title: "Magnet",
  component: Magnet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Magnet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultMagnet: Story = {
  args: {
    type: MagnetType.Default,
    content: {
      logo: "",
      title: "Title",
      description: "Description Text",
      content:
        "Consequat commodo ad aliquip sint irure consequat do excepteur in.",
    },
  },
};
export const DoubleMagnet: Story = {
  args: {
    type: MagnetType.Double,
    content: {
      logo: "",
      title: "Title",
      description: "Description Text",
      content:
        "Consequat commodo ad aliquip sint irure consequat do excepteur in.",
    },
  },
};
export const TripleMagnet: Story = {
  args: {
    type: MagnetType.Triple,
    content: {
      logo: "",
      title: "Title",
      description: "Description Text",
      content:
        "Consequat commodo ad aliquip sint irure consequat do excepteur in.",
    },
  },
};
export const GridMagnet: Story = {
  args: {
    type: MagnetType.Grid,
    content: {
      logo: "",
      title: "Title",
      description: "Description Text",
      content:
        "Consequat commodo ad aliquip sint irure consequat do excepteur in.",
    },
  },
};
