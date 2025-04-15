import type { Meta, StoryObj } from "@storybook/react";
import PricingTierCard from "../ui/components/pricing-tier-card/PricingTierCard";

const meta = {
  title: "Example/PricingTierCard",
  component: PricingTierCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof PricingTierCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    planName: 'Pricing Card Plan',
    price: 0,
    features: ['feature 1', 'feature 2'],
    ctaText: 'I want it!',
  },
};

export const isFeatured: Story = {
  args: {
    planName: 'Pricing Card Plan',
    price: 0,
    features: ['feature 1', 'feature 2'],
    ctaText: 'I want it!',
    isFeatured: true,
  },
};


export const StringCustomPrice: Story = {
  args: {
    planName: 'Pricing Card Plan',
    price: '$10/month',
    features: ['feature 1', 'feature 2'],
    ctaText: 'I want it!',
  },
};

export const PriceGreaterThanZero: Story = {
  args: {
    planName: 'Pricing Card Plan',
    price: 12,
    features: ['feature 1', 'feature 2'],
    ctaText: 'I want it!',
  },
};
