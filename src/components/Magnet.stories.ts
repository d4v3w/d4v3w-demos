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
    logo: "https://picsum.photos/seed/picsum/100/30",
    title: "Title",
    description: "Description Text",
    content:
      "Consequat commodo ad aliquip sint irure consequat do excepteur in.",
    footer: "Fugiat sit ea cillum reprehenderit veniam.",
  },
};
export const DoubleMagnet: Story = {
  args: {
    type: MagnetType.Double,
    logo: "https://picsum.photos/seed/picsum/100/30",
    title: "Title",
    description: "Description Text",
    content:
      "Consequat commodo ad aliquip sint irure consequat do excepteur in.",
    footer: "Fugiat sit ea cillum reprehenderit veniam.",
  },
};
export const TripleMagnet: Story = {
  args: {
    type: MagnetType.Triple,
    logo: "https://picsum.photos/seed/picsum/100/30",
    title: "Title",
    description: "Description Text",
    content:
      "Consequat commodo ad aliquip sint irure consequat do excepteur in.",
    footer: "Fugiat sit ea cillum reprehenderit veniam.",
    image: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
    link: "https://www.google.com/images",
    cta: "Click Me",
    footnote: "Foot in your note!",
    subImage: [
      "https://picsum.photos/seed/picsum/200/100.webp",
      "https://picsum.photos/seed/picsum/200/100.webp",
      "https://picsum.photos/seed/picsum/200/100.webp",
    ],
  },
};
export const GridMagnet: Story = {
  args: {
    type: MagnetType.Grid,
    logo: "https://picsum.photos/seed/picsum/100/30",
    title: "Title",
    description: "Description Text",
    content:
      "Consequat commodo ad aliquip sint irure consequat do excepteur in.",
    footer: "Fugiat sit ea cillum reprehenderit veniam.",
  },
};
