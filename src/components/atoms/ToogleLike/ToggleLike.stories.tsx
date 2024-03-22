import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ToggleLike } from '.';
import { useState } from 'react';

const meta = {
  title: 'atoms/ToggleLike',
  component: ToggleLike,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof ToggleLike>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomToggleLike: Story = {
  args: {
    isLiked: false,
    onToggle: fn(),
  },

  render: function Render(arg) {
    const [isLiked, setIsliked] = useState(false);

    function onChange() {
      setIsliked(!isLiked);
    }

    return (
      <ToggleLike {...arg} onToggle={() => onChange()} isLiked={isLiked} />
    );
  },
};
