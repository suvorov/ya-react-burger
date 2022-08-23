import React from 'react';
import PropTypes from 'prop-types';
import styles from './ingredients-type.module.css';
import IngredientCard from './ingredient-card/ingredient-card';

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
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['bun', 'main', 'sauce']).isRequired,
      proteins: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
      carbohydrates: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      image_mobile: PropTypes.string.isRequired,
      image_large: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default IngredientsType;