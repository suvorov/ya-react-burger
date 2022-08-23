import React, { useEffect, useState } from 'react';
import styles from './ingredient-card.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../../../modals/ingredient-details/ingredient-details';

const IngredientCard = ({
  ingredient
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const onShowDetails = () => {
    setShowDetails(true);
  };

  const onCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className={styles.card} onClick={onShowDetails}>
      <Counter count={1} size="default" />
      <img src={ingredient.image} alt={ingredient.name} />
      <div className={styles.price}>
        <p className="text text_type_digits-default mr-2">
          {ingredient.price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.name}>
        {ingredient.name}
      </p>
      {showDetails && <IngredientDetails onClose={onCloseDetails} ingredient={ingredient} />}
    </div>
  );
};

export default IngredientCard;