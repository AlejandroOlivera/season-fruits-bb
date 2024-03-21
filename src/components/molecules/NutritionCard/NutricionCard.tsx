import { useFruitStore } from '@/stores/AllFruits/useFruit.store';
import './nutricionCars.scss';
import { Typography } from '@/components/atoms';
import { memo } from 'react';

export const NutricionCard: React.FC = memo(() => {
  const generalInformation = useFruitStore((state) => state.getNutritionSum());

  return (
    <>
      <div className="nutricionCardContainer">
        <Typography
          text="General Information"
          color="#D7B46B"
          size="large"
          fontWeight={700}
        />

        <div className="d-flex">
          <Typography
            text="No. of Found Products: "
            color="#2C2C2C"
            size="medium"
            fontWeight={700}
          />

          <Typography
            text={generalInformation.totalItems}
            color="#2C2C2C"
            size="medium"
            fontWeight={400}
          />
        </div>
        <Typography
          text="Nutritional properties of found products"
          color="#D7B46B"
          size="medium"
          fontWeight={700}
        />
        <div>
          <Typography
            text="Total calories"
            color="#2C2C2C"
            size="medium"
            fontWeight={700}
          />
          <Typography
            text={generalInformation.calories}
            color="#2C2C2C"
            size="medium"
            fontWeight={400}
          />
        </div>

        <div>
          <Typography
            text="Total fats"
            color="#D7B46B"
            size="medium"
            fontWeight={700}
          />
          <Typography
            text={generalInformation.fat}
            color="#2C2C2C"
            size="medium"
            fontWeight={400}
          />
        </div>

        <div>
          <Typography
            text="Total sugar"
            color="#2C2C2C"
            size="medium"
            fontWeight={700}
          />
          <Typography
            text={generalInformation.sugar}
            color="#2C2C2C"
            size="medium"
            fontWeight={400}
          />
        </div>

        <div>
          <Typography
            text="Total carbohydrates"
            color="#2C2C2C"
            size="medium"
            fontWeight={700}
          />
          <Typography
            text={generalInformation.carbohydrates}
            color="#2C2C2C"
            size="medium"
            fontWeight={400}
          />
        </div>
        <div>
          <Typography
            text="Total proteins"
            color="#2C2C2C"
            size="medium"
            fontWeight={700}
          />
          <Typography
            text={generalInformation.protein}
            color="#2C2C2C"
            size="medium"
            fontWeight={400}
          />
        </div>
      </div>
    </>
  );
});
