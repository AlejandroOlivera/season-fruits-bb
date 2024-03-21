import { useFruitStore } from '@/stores/AllFruits/useFruit.store';

import { useEffect, useState } from 'react';
import { FruitCard } from '../molecules/FruitCard/FruitCard';
import './fruitList.scss';
import { Button } from '../atoms';
import { Select } from '../atoms/Select/Select';

export const FruitList: React.FC = () => {
  const fetchFruits = useFruitStore((state) => state.fetchFruits);
  const handleSeeMore = useFruitStore((state) => state.handleSeeMore);
  const sortFruits = useFruitStore((state) => state.sortFruits);
  const displayedFruits = useFruitStore((state) => state.displayedFruits);

  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    fetchFruits();
  }, [fetchFruits]);

  return (
    <div className="">
      <div className="d-flex gap-3 mb-2">
        <Select
          value={selectedValue}
          defaultValue=""
          options={[
            {
              label: 'Family',
              value: 'Family',
            },
            {
              label: 'Order',
              value: 'Order',
            },

            {
              label: 'Genus',
              value: 'Genus',
            },
          ]}
          onChange={setSelectedValue}
        />
        <Button label="Order A-Z" onClick={sortFruits} />
      </div>

      <div className="fruit-cards-container">
        {displayedFruits.map((fruit) => (
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
      <Button label="Ver Mas" onClick={handleSeeMore} />
    </div>
  );
};
