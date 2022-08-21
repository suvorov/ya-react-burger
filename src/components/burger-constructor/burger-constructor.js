import React from 'react';
import styles from './burger-constructor.module.css';
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const BurgerConstructor = ({
  ingredients
}) => {
  const img = 'https://code.s3.yandex.net/react/code/bun-02.png';
  const totalPrice = 610;

  return (
    <section className={styles.section}>
      <div className={styles.elements}>
        <div className={styles.element}>
          <DragIcon type="primary" />
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={img}
          />
        </div>
        <div className={styles.ingredients}>
          {ingredients.map(item => (
            <div className={styles.element}>
              <DragIcon type="primary" />
              <ConstructorElement
                key={item._id}
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </div>
          ))}
        </div>
        <div className={styles.element}>
          <DragIcon type="primary" />
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={img}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.price}>
          <p className="text text_type_digits-medium mr-2">
            {totalPrice}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

export default BurgerConstructor;