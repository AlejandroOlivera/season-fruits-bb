import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '.';
import { fn } from '@storybook/test';

const meta = {
  title: 'atoms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomSelect: Story = {
  args: {
    onChange: fn(),
    disabled: false,
    value: '',
    options: [
      {
        label: 'Option 1',
        value: '1',
      },

      {
        label: 'Option 2',
        value: '2',
      },

      {
        label: 'Option 3',
        value: '3',
      },
    ],
  },
};
