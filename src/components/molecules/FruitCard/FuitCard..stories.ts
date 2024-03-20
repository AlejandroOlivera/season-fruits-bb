import type { Meta, StoryObj } from '@storybook/react';
import { FruitCard } from './FruitCard';
const meta = {
  title: 'molecules/FruitCard',
  component: FruitCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FruitCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstFruitCard: Story = {
  args: {
    name: 'Apple',
    id: 1,
    family: 'Rosaceae',
    order: 'Rosales',
    genus: 'Malus',
    nutritions: {
      calories: 52,
      fat: 0.2,
      sugar: 10.4,
      carbohydrates: 13.8,
      protein: 0.3,
    },
    image: '/Apple.webp',
  },
};
