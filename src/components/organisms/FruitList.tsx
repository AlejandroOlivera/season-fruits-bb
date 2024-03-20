import { useFavoriteStore } from '@/stores';
import { useFruitStore } from '@/stores/AllFruits/useFruit.store';
import { useEffect } from 'react';

export const FruitList: React.FC = () => {
  const fetchFruits = useFruitStore((state) => state.fetchFruits);
  const fruits = useFruitStore((state) => state.fruits);
  console.log('🚀 ~ fruits:', fruits);

  const { addLikedProduct, likedProducts } = useFavoriteStore();

  useEffect(() => {
    fetchFruits();
  }, []);
  return (
    <>
      <h1>Fruit List</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            <img src={fruit.image} alt={fruit.name} />
            <div>{fruit.name}</div>
            <button onClick={() => addLikedProduct(fruit.name)}>
              {likedProducts.includes(fruit.name) ? 'Dislike' : 'Like'}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
