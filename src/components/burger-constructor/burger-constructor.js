import React, { useCallback, useState } from 'react';
import styles from './burger-constructor.module.css';
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from '../modals/order-details/order-details';
import { ingredientTypes } from '../../utils/types';

const BurgerConstructor = React.memo(({
  ingredients
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const img = 'https://code.s3.yandex.net/react/code/bun-02.png';
  const totalPrice = 610;

  const onShowDetails = () => {
    setShowDetails(true);
  };

  const onCloseDetails = useCallback(() => {
    setShowDetails(false);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.elements}>
        <div className={styles.element}>
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
            <div
              key={item._id}
              className={styles.element}
            >
              <div className={styles.icon}>
                <DragIcon type="primary" />
              </div>
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </div>
          ))}
        </div>
        <div className={styles.element}>
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
        <Button type="primary" size="large" onClick={onShowDetails}>
          Оформить заказ
        </Button>
      </div>
      {showDetails && <OrderDetails onClose={onCloseDetails} />}
    </section>
  );
});

BurgerConstructor.propTypes = {
  ingredients: ingredientTypes,
};

export default BurgerConstructor;