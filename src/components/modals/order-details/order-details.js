import React, { ReactDOM, useEffect, useState } from 'react';
import styles from './order-details.module.css';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal';

const OrderDetails = ({
  onClose,
  children
}) => {
  return (
    <Modal onClose={onClose}>
      <div className={styles.order}>
        <p className="text text_type_digits-large mt-4 mb-8">034536</p>
        <p className="text text_type_main-medium">идентификатор заказа</p>
        <div className={styles.check}>
          <CheckMarkIcon type="primary" />
        </div>
        <p className="text text_type_main-default">Ваш заказ начали готовить</p>
        <p className="text text_type_main-small text_color_inactive mt-2 mb-10">Дождитесь готовности на орбитальной станции</p>
      </div>
    </Modal>
  );
};

export default OrderDetails;