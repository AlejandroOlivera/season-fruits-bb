import { useFruitStore } from '@/stores/AllFruits/useFruit.store';
import { useEffect } from 'react';
import { FruitCard } from '../molecules/FruitCard/FruitCard';
import './fruitList.scss';
import { Typography } from '../atoms';

export const FruitList: React.FC = () => {
  const fetchFruits = useFruitStore((state) => state.fetchFruits);
  const fruits = useFruitStore((state) => state.fruits);

  useEffect(() => {
    fetchFruits();
  }, [fetchFruits]);

  return (
    <>
      <Typography text="Season fruits" size="extra-large" fontWeight={700} />

      <Typography text="the most wonderful fruits" size="medium" />

      <div className="fruit-cards-container">
        {fruits.map((fruit) => (
          <FruitCard
            key={fruit.id}
            family={fruit.family}
            genus={fruit.genus}
            id={fruit.id}
            name={fruit.name}
            nutritions={fruit.nutritions}
            order={fruit.order}
            image={fruit.image}
          />
        ))}
      </div>
    </>
  );
};
