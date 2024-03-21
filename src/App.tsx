import './App.css';

import { Typography } from './components/atoms';
import { NutricionCard } from './components/molecules/NutritionCard/NutricionCard';
import { FruitList } from './components/organisms/FruitList';

function App() {
  return (
    <>
      <div className="season-fruit">
        <div className="mb-5">
          <Typography
            text="Season fruits"
            size="extra-large"
            fontWeight={700}
            textAlign="center"
          />

          <Typography
            text="the most wonderful fruits"
            size="medium"
            textAlign="center"
            color="#D7B46B"
          />
        </div>

        <div className="container-nutrition">
          <FruitList />

          <NutricionCard />
        </div>
      </div>
    </>
  );
}

export default App;
