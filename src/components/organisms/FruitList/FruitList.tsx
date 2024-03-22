import { useEffect, useState } from 'react';
import { useFruitStore } from '@/stores';

import { Button, InputField, Select } from '@/components/atoms';
import { FruitCard } from '@/components/molecules';

import './fruitList.scss';

export const FruitList: React.FC = () => {
  const fetchFruits = useFruitStore((state) => state.fetchFruits);
  const handleSeeMore = useFruitStore((state) => state.handleSeeMore);
  const sortFruits = useFruitStore((state) => state.sortFruits);
  const displayedFruits = useFruitStore((state) => state.displayedFruits);
  const page = useFruitStore((state) => state.page);
  const fruits = useFruitStore((state) => state.fruits);
  const perPage = useFruitStore((state) => state.perPage);
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
        <Button primary size="medium" label="Order A-Z" onClick={sortFruits} />
      </div>

      <div className="fruit-cards-container">
        {displayedFruits.map((fruit) => (
          <FruitCard
            isLiked={fruit.isLiked}
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

      {page < Math.ceil(fruits.length / perPage) && (
        <div className="fruit-list-button">
          <Button label="See more" onClick={handleSeeMore} />
        </div>
      )}
    </div>
  );
};
