import { createContext, useEffect, useState } from 'react';
import styles from './app.module.css';
import get from '../../utils/api';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

export const IngredientsContext = createContext();

const App = () => {
  const url = 'https://norma.nomoreparties.space/api/ingredients';
  const ingredientsState = useState([]);

  useEffect(() => {
    get(url, (data) => {
      const [, setIngredients] = ingredientsState;
      setIngredients(data.data);
    })
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.content}>
        <IngredientsContext.Provider value={ingredientsState}>
          <BurgerIngredients />
          <BurgerConstructor />
        </IngredientsContext.Provider>
      </main>
    </div>
  );
};

export default App;
