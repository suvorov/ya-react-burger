import React, { useEffect, useState } from 'react';
import styles from './burger-ingredients.module.css';
import IngredientsType from './ingredients-type/ingredients-type';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredients = ({
  ingredients
}) => {
  const [current, setCurrent] = React.useState("one");
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

  const onCurrent = () => {
    setCurrent(current);
  };

  return (
    <section className={styles.section}>
      <p>Соберите бургер</p>
      <div style={{display: 'flex'}}>
        <Tab value="one" active={current === 'one'} onClick={onCurrent}>Булки</Tab>
        <Tab value="two" active={current === 'two'} onClick={onCurrent}>Соусы</Tab>
        <Tab value="three" active={current === 'three'} onClick={onCurrent}>Начинки</Tab>
      </div>
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