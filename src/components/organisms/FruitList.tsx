import { useEffect } from 'react';
import { useFruitStore } from '../../hooks/useFruitStore';

export const FruitList: React.FC = () => {
  const { fruits, fetchFruits } = useFruitStore();
  console.log('🚀 ~ fruits:', fruits);

  useEffect(() => {
    fetchFruits();
  }, [fetchFruits]);
  return (
    <>
      <h1>Fruit List</h1>
    </>
  );
};
