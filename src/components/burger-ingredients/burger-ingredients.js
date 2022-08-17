import React, { useEffect, useState } from 'react';
import styles from './burger-ingredients.module.css';
import IngredientsType from './ingredients-type/ingredients-type';

const BurgerIngredients = ({
  ingredients
}) => {
  const [buns, setBuns] = React.useState([]);
  const [mains, setMains] = React.useState([]);
  const [sauces, setSauces] = React.useState([]);

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

  return (
    <section className={styles.section}>
      <IngredientsType
        title='Булки'
        ingredients={buns}
      />
      <IngredientsType
        title='Соусы'
        ingredients={sauces}
      />
      <IngredientsType
        title='Начинки'
        ingredients={mains}
      />
    </section>
  );
};

export default BurgerIngredients;