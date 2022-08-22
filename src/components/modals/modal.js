import React, { ReactDOM, useEffect, useState } from 'react';
import styles from './modal.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

const Modal = ({
  children
}) => {
  const el = document.createElement('div');
  const modalRootEl = document.getElementById('modal-root');

  useEffect(() => {
    modalRootEl.appendChild(el);

    return () => {
      modalRootEl.removeChild(el);
    }
  }, []);

  return ReactDOM.createPortal(children, el);
};

export default Modal;