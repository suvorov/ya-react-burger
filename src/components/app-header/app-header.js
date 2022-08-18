import React from 'react';
import styles from './app-header.module.css';
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.left_links}>
          <nav>
            <BurgerIcon type="primary" />
            <a className='text' href="#constructor">Конструктор</a>
          </nav>
          <nav className={styles.inactive}>
            <ListIcon type="secondary" />
            <a className='text' href="#orders">Лента заказов</a>
          </nav>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.profile}>
          <nav className={styles.inactive}>
            <ProfileIcon type="secondary" />
            <a className='text' href="#profile">Личный кабинет</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;