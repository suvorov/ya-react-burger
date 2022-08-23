import React from 'react';
import PropTypes from 'prop-types';
import styles from './ingredient-details.module.css';
import Modal from '../modal';

const IngredientDetails = React.memo(({
  ingredient,
  onClose,
}) => {
  return (
    <Modal onClose={onClose} title="Детали ингредиента">
      <div className={styles.details}>
        <img src={ingredient.image_large} alt={ingredient.name} />
        <p className="text text_type_main-medium mt-4 mb-8">{ingredient.name}</p>
        <div className={styles.info}>
          <div className="text text_type_main-default text_color_inactive">
            <p className="text">Калории,ккал</p>
            <p className="text text_type_digits-default">{ingredient.calories}</p>
          </div>
          <div className="text text_type_main-default text_color_inactive">
            <p className="text">Белки, г</p>
            <p className="text text_type_digits-default">{ingredient.proteins}</p>
          </div>
          <div className="text text_type_main-default text_color_inactive">
            <p className="text">Жиры, г</p>
            <p className="text text_type_digits-default">{ingredient.fat}</p>
          </div>
          <div className="text text_type_main-default text_color_inactive">
            <p className="text">Углеводы, г</p>
            <p className="text text_type_digits-default">{ingredient.carbohydrates}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
});

IngredientDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
  ingredient: PropTypes.shape({
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
  }).isRequired,
};

export default IngredientDetails;