import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const App = () => {
  const url = 'https://norma.nomoreparties.space/api/ingredients';
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(data => setIngredients(data.data))
      .catch(err => console.error(`Error: ${err}`));
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <BurgerIngredients ingredients={ingredients} />
      <BurgerConstructor />
    </div>
  );
};

export default App;
