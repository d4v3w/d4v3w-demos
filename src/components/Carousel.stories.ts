import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { Carousel } from "./Carousel";

import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";
import { carouselMockData } from "./Carousel.mocks";

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

export const CarouselStory: Story = {
  storyName: "Carousel With Scroll Button Interactions",
  args: {
    items: carouselMockData,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const scrollLeftButton = canvas.getByTestId("scroll-left");
    const scrollRightButton = canvas.getByTestId("scroll-right");

    // Scroll all the way to the end of the items
    await userEvent.click(scrollRightButton, {
      delay: 100,
    });
    await userEvent.click(scrollRightButton, {
      delay: 100,
    });
    await userEvent.click(scrollRightButton, {
      delay: 100,
    });
    await userEvent.click(scrollRightButton, {
      delay: 100,
    });
    await userEvent.click(scrollRightButton, {
      delay: 100,
    });
    await userEvent.click(scrollRightButton, {
      delay: 100,
    });
    await userEvent.click(scrollRightButton, {
      delay: 100,
    });

    // Scroll back again
    await userEvent.click(scrollLeftButton, {
      delay: 500,
    });
    await userEvent.click(scrollLeftButton, {
      delay: 100,
    });
    await userEvent.click(scrollLeftButton, {
      delay: 100,
    });
    await userEvent.click(scrollLeftButton, {
      delay: 100,
    });
  },
};

export const CarouselShort: Story = {
  args: {
    items: carouselMockData.filter((_, index) => index < 3),
  },
};

export const CarouselSelectForthItem: Story = {
  storyName: "Carousel With Selected Item out of page load view",
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        searchParams: { carousel: "3" },
      },
    }),
  },
  args: {
    items: carouselMockData,
  },
};

export const CarouselSelectLastItem: Story = {
  storyName: "Carousel With Selected Item out of page load view",
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        searchParams: { carousel: "9" },
      },
    }),
  },
  args: {
    items: carouselMockData,
  },
};

export const CarouselEmpty: Story = {
  args: {
    items: [],
  },
};
