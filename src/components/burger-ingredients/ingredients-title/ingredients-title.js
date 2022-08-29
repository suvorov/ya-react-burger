import React, { useState } from 'react';
import styles from './ingredients-title.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientsTitle = () => {
  const [current, setCurrent] = useState("one");

  const onCurrent = () => {
    setCurrent(current);
  };

  return (
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
  );
};

export default IngredientsTitle;