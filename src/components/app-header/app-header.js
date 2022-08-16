import React from 'react';
import styles from './app-header.module.css';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
  return (
    <header className={ styles.header }>
      <BurgerIcon type="primary" /> Конструктор
      <ListIcon type="primary" /> Лента заказов
      <Logo />
      <ProfileIcon type="primary" /> Личный кабинет
    </header>
  );
}

export default AppHeader;