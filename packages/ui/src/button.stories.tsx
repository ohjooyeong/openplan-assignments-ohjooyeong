import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "기본 버튼",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "작은 버튼",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "중간 버튼",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "큰 버튼",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "비활성화 버튼",
  },
};
