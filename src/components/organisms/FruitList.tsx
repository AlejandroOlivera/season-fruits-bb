import { useFruitStore } from '@/stores/AllFruits/useFruit.store';

import { useEffect, useState } from 'react';
import { FruitCard } from '../molecules/FruitCard/FruitCard';
import './fruitList.scss';
import { Button } from '../atoms';
import { Select } from '../atoms/Select/Select';
import { InputField } from '../atoms/Input/Input';

export const FruitList: React.FC = () => {
  const fetchFruits = useFruitStore((state) => state.fetchFruits);
  const handleSeeMore = useFruitStore((state) => state.handleSeeMore);
  const sortFruits = useFruitStore((state) => state.sortFruits);
  const displayedFruits = useFruitStore((state) => state.displayedFruits);

  const filterFruits = useFruitStore((state) => state.filterFruits);

  const [selectedFilter, setSelectedFilter] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    fetchFruits();
  }, []);

  const handleSearch = () => {
    filterFruits(selectedFilter, selectedValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div className="fruit-list-container">
      <div className="buttons-container">
        <Select
          value={selectedFilter}
          options={[
            {
              label: 'Filter by: ',
              value: '',
            },
            {
              label: 'Family',
              value: 'family',
            },
            {
              label: 'Order',
              value: 'order',
            },

            {
              label: 'Genus',
              value: 'genus',
            },
          ]}
          onChange={setSelectedFilter}
        />
        <InputField
          type="text"
          value={selectedValue}
          onChange={handleInputChange}
          onSearch={handleSearch}
        />
        <Button primary size="small" label="Order A-Z" onClick={sortFruits} />
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
      <div className="fruit-list-button">
        <Button label="Ver Mas" onClick={handleSeeMore} />
      </div>
    </div>
  );
};
