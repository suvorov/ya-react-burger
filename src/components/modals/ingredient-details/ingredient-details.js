import React, { useEffect, useState } from 'react';
import styles from './ingredient-details.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal';

const IngredientDetails = ({
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
            <p className="text">{ingredient.calories}</p>
          </div>
          <div className="text text_type_main-default text_color_inactive">
            <p className="text">Белки, г</p>
            <p className="text">{ingredient.proteins}</p>
          </div>
          <div className="text text_type_main-default text_color_inactive">
            <p className="text">Жиры, г</p>
            <p className="text">{ingredient.fat}</p>
          </div>
          <div className="text text_type_main-default text_color_inactive">
            <p className="text">Углеводы, г</p>
            <p className="text">{ingredient.carbohydrates}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default IngredientDetails;