import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta = {
  title: 'atoms/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LargeTypography: Story = {
  args: {
    text: 'Lychee',
    color: '#D7B46B',
    size: 'large',
    fontWeight: 700,
  },
};
