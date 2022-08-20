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
            <a href="#constructor">Конструктор</a>
          </nav>
          <nav>
            <ListIcon type="secondary" />
            <a href="#orders" className="text_color_inactive">Лента заказов</a>
          </nav>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.profile}>
          <nav>
            <ProfileIcon type="secondary" />
            <a href="#profile" className="text_color_inactive">Личный кабинет</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;