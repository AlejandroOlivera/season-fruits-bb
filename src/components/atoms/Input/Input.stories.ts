import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from '.';
import { fn } from '@storybook/test';

const meta = {
  title: 'atoms/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomInputField: Story = {
  args: {
    onChange: fn(),
    onSearch: fn(),
    type: 'text',
    value: '',
  },
};
