import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { FruitList } from './FruitList';

const meta = {
  title: 'organism/FruitList',
  component: FruitList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof FruitList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomFruitList: Story = {
  args: {
    isLiked: false,
    onToggle: fn(),
  },
};
