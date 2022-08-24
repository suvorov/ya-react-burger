import React, { useCallback, useEffect, useState } from 'react';
import styles from './burger-ingredients.module.css';
import IngredientsTitle from './ingredients-title/ingredients-title';
import IngredientsType from './ingredients-type/ingredients-type';
import IngredientDetails from './ingredient-details/ingredient-details';
import Modal from '../modals/modal';
import { ingredientTypes } from '../../utils/types';

const BurgerIngredients = ({
  ingredients
}) => {
  const [buns, setBuns] = React.useState([]);
  const [mains, setMains] = React.useState([]);
  const [sauces, setSauces] = React.useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [ingredientDetails, setIngredientDetails] = React.useState();

  useEffect(() => {
    const bunsData = [];
    const mainsData = [];
    const saucesData = [];

    ingredients.forEach((item) => {
      if (item.type === 'bun') {
        bunsData.push(item);
      } else if (item.type === 'main') {
        mainsData.push(item);
      } else if (item.type === 'sauce') {
        saucesData.push(item);
      }
    });

    setBuns(bunsData);
    setMains(mainsData);
    setSauces(saucesData);

  }, [
    ingredients
  ]);

  const onShowDetails = useCallback((ingredient) => {
    setShowDetails(true);
    setIngredientDetails(ingredient);
  }, []);

  const onCloseDetails = useCallback(() => {
    setShowDetails(false);
  }, []);

  return (
    <>
      <Modal
        title="Детали ингредиента"
        isOpen={showDetails}
        onClose={onCloseDetails}
      >
        <IngredientDetails ingredient={ingredientDetails} />
      </Modal>

      <section className={styles.section}>
        <IngredientsTitle />
        <div className={styles.types}>
          <IngredientsType
            title='Булки'
            ingredients={buns}
            onShowDetails={onShowDetails}
          />
          <IngredientsType
            title='Соусы'
            ingredients={sauces}
            onShowDetails={onShowDetails}
          />
          <IngredientsType
            title='Начинки'
            ingredients={mains}
            onShowDetails={onShowDetails}
          />
        </div>
      </section>
    </>
  );
};

BurgerIngredients.propTypes = {
  ingredients: ingredientTypes,
};

export default BurgerIngredients;