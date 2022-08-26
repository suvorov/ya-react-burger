import React from 'react';
import PropTypes from 'prop-types';
import styles from './ingredients-type.module.css';
import IngredientCard from './ingredient-card/ingredient-card';
import { ingredientsArrayType } from '../../../utils/types';

const IngredientsType = React.memo(({
  title,
  ingredients,
  onShowDetails,
}) => {
  return (
    <>
      <div className='text text_type_main-medium mb-6 mt-10'>
        {title}
      </div>
      <div className={styles.container}>
        {ingredients.map((item) => (
          <IngredientCard
            key={item._id}
            ingredient={item}
            onShowDetails={onShowDetails}
          />
        ))}
      </div>
    </>
  );
});

IngredientsType.propTypes = {
  title: PropTypes.string.isRequired,
  onShowDetails: PropTypes.func.isRequired,
  ingredients: ingredientsArrayType,
};


export default IngredientsType;