import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";

import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";

const meta = {
  title: "Carousel",
  component: Carousel,
  decorators: [withRouter],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CarouselDefault: Story = {};

export const CarouselSelected: Story = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        searchParams: { carousel: "8" },
      },
    }),
  },
};
