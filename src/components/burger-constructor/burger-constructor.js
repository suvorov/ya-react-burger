import React, { useCallback, useContext, useState, useEffect } from 'react';
import styles from './burger-constructor.module.css';
import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from './order-details/order-details';
import Modal from '../modals/modal';
import { IngredientsContext } from '../app/app';

const BurgerConstructor = React.memo(() => {
  const [ingredients] = useContext(IngredientsContext);
  const [bun, setBun] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [withoutBuns, setWithoutBuns] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const sumPrice = () => {
    let sum = 0;

    withoutBuns.forEach((bun) => {
      sum += bun.price;
    });

    sum += bun.price * 2;

    return sum;
  };

  useEffect(() => {
    const withoutBuns = ingredients.reduce((prev, cur) => {
      if (cur.type !== 'bun') {
        prev.push({
          ...cur,
          key: crypto.randomUUID(),
        });
      }

      return prev;
    }, []);

    // данные о булках
    const buns = ingredients.reduce((prev, cur) => {
      if (cur.type === 'bun') {
        prev.push({
          ...cur,
          key: crypto.randomUUID(),
        });
      }

      return prev;
    }, []);

    if (buns.length) {
      // пока что выбираем рандомную булку для заказа
      const index = Math.round(Math.random() * (buns.length - 1));
      const rndBun = buns[index];
      setBun(rndBun);
    }

    setWithoutBuns(withoutBuns);
    setTotalPrice(sumPrice());
  }, [ingredients]);

  const onShowDetails = () => {
    setShowDetails(true);
  };

  const onCloseDetails = useCallback(() => {
    setShowDetails(false);
  }, []);

  return (
    <>
      <Modal
        isOpen={showDetails}
        onClose={onCloseDetails}
      >
        <OrderDetails />
      </Modal>

      <section className={styles.section}>
        <div className={styles.elements}>
          <div className={styles.element}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={bun.name + ' (верх)'}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
          <div className={styles.ingredients}>
            {withoutBuns.map(item => (
              <div
                key={item.key}
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
              text={bun.name + ' (низ)'}
              price={bun.price}
              thumbnail={bun.image}
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
      </section>
    </>
  );
});

export default BurgerConstructor;