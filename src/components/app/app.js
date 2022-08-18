import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const App = () => {
  const url = 'https://norma.nomoreparties.space/api/ingredients';
  const [ingredients, setIngredients] = useState([]);
  const [current, setCurrent] = React.useState("one");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(data => setIngredients(data.data))
      .catch(err => console.error(`Error: ${err}`));
  }, []);

  const onCurrent = () => {
    setCurrent(current);
  };

  return (
    <div className={styles.app}>
      <AppHeader />
      <div className={styles.title}>
        <p className="text text_type_main-large pt-10 pb-5">Соберите бургер</p>
        <div className={styles.tabs}>
          <Tab
            value="one"
            active={current === 'one'}
            onClick={onCurrent}>
            Булки
          </Tab>
          <Tab
            value="two"
            active={current === 'two'}
            onClick={onCurrent}>
            Соусы
          </Tab>
          <Tab
            value="three"
            active={current === 'three'}
            onClick={onCurrent}>
            Начинки
          </Tab>
        </div>
      </div>
      <div className={styles.content}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor />
      </div>
    </div>
  );
};

export default App;
