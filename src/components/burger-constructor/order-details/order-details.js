import React from 'react';
import styles from './order-details.module.css';
import PropTypes from 'prop-types';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderDetails = React.memo(({
  orderId
}) => {
  return (
    <div className={styles.order}>
      <p className="text text_type_digits-large mt-4 mb-8">{orderId}</p>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <div className={styles.check}>
        <CheckMarkIcon type="primary" />
      </div>
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-small text_color_inactive mt-2 mb-10">Дождитесь готовности на орбитальной станции</p>
    </div>
  );
});

OrderDetails.propTypes = {
  orderId: PropTypes.number.isRequired,
};

export default OrderDetails;