import { useEffect, useState } from 'react';
import styles from './app.module.css';
import get from '../../utils/api';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

const App = () => {
  const url = 'https://norma.nomoreparties.space/api/ingredients';
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    get(url, (data) => {
      setIngredients(data.data);
    })
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.content}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor ingredients={ingredients} />
      </main>
    </div>
  );
};

export default App;
