import React, { useEffect, useState } from 'react';
import styles from './burger-ingredients.module.css'
import { CurrencyIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState("one");
  const [buns, setBuns] = React.useState([]);
  const [mains, setMains] = React.useState([]);
  const [sauces, setSauces] = React.useState([]);

  useEffect(() => {
    console.log('BurgerIngredients');
    const bunsData = [];
    const mainsData = [];
    const saucesData = [];

    props.ingredients.forEach((item) => {
      if (item.type === 'bun') {
        bunsData.push(item);
      } else if (item.type === 'main') {
        mainsData.push(item);
      } else if (item.type === 'sauce') {
        saucesData.push(item);
      }
    });

    console.log(bunsData);
    console.log(mainsData);
    console.log(saucesData);
    setBuns(bunsData);
    setMains(mainsData);
    setSauces(saucesData);

  }, [
    props.ingredients
  ]);

  const onCurrent = () => {
    setCurrent(current);
  };

  return (
    <section className={ styles.section }>
      <p>Соберите бургер</p>
      <div style={{ display: 'flex' }}>
        <Tab value="one" active={current === 'one'} onClick={onCurrent}>Булки</Tab>
        <Tab value="two" active={current === 'two'} onClick={onCurrent}>Соусы</Tab>
        <Tab value="three" active={current === 'three'} onClick={onCurrent}>Начинки</Tab>
      </div>
      <p>Булки</p>
      {buns.map((item, index)=>(
        <div key={ item._id }>
          <img src={ item.image } alt={ item.name } />
          <p>{item.price} <CurrencyIcon type="primary" /></p>
          <p>{item.name}</p>
        </div>
      ))}
      <p>Соусы</p>
      {sauces.map((item, index)=>(
        <div key={ item._id }>
          <img src={ item.image } alt={ item.name } />
          <p>{item.price} <CurrencyIcon type="primary" /></p>
          <p>{item.name}</p>
        </div>
      ))}
      <p>Начинки</p>
      {mains.map((item, index)=>(
        <div key={ item._id }>
          <img src={ item.image } alt={ item.name } />
          <p>{item.price} <CurrencyIcon type="primary" /></p>
          <p>{item.name}</p>
        </div>
      ))}
    </section>
  );
}

export default BurgerIngredients;