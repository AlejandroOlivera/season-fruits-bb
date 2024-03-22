import { Fruit } from '@/interface/Fruit.interface';
import './fruitCard.scss';
import { Typography } from '@/components/atoms/Typography/Typography';
import React from 'react';
import { ToggleLike } from '@/components/atoms/ToogleLike/ToogleLike';
import { useFruitStore } from '@/stores/AllFruits/useFruit.store';

export const FruitCard: React.FC<Fruit> = React.memo(
  ({ name, family, order, genus, nutritions, image, isLiked }) => {
    const toggleLikeFruit = useFruitStore((state) => state.toggleLikeFruit);

    return (
      <>
        <div className="fruit-card">
          <div className="card-image-container">
            <img className="card-container__image" src={image} alt={image} />

            <div className="card-container__icon">
              <ToggleLike
                isLiked={isLiked}
                onToggle={() => toggleLikeFruit(name)}
              />
            </div>
          </div>
          <div className="fruit-body">
            <Typography
              text={name}
              color="#D7B46B"
              size="large"
              fontWeight={700}
            />

            <div className="fruit-family-container">
              <div>
                <Typography fontWeight={700} text="Family: " />
                <Typography text={family} />
              </div>

              <div>
                <Typography fontWeight={700} text="Order: " />
                <Typography text={order} />
              </div>

              <div>
                <Typography fontWeight={700} text="Genus: " />
                <Typography text={genus} />
              </div>
            </div>

            <div className="fruit-nutritions">
              <Typography
                text="Nutritions"
                color="#D7B46B"
                size="medium"
                fontWeight={700}
              />

              <div>
                <Typography fontWeight={700} text="Calories: " />
                <Typography text={nutritions.calories} />
              </div>

              <div>
                <Typography fontWeight={700} text="Fat: " />
                <Typography text={nutritions.fat} />
              </div>

              <div>
                <Typography fontWeight={700} text="Sugar: " />
                <Typography text={nutritions.sugar} />
              </div>

              <div>
                <Typography fontWeight={700} text="Carbohydrates: " />
                <Typography text={nutritions.carbohydrates} />
              </div>

              <div>
                <Typography fontWeight={700} text="Protein: " />
                <Typography text={nutritions.protein} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  },
);
