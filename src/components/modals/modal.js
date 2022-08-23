import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from './modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Modal = React.memo(({
  title = '',
  onClose,
  children
}) => {
  const modalRootEl = document.getElementById('modal-root');
  const el = document.createElement('div');

  useEffect(() => {
    modalRootEl.appendChild(el);

    return () => {
      modalRootEl.removeChild(el);
    };
  }, []);

  const onClick = React.useCallback((e) => {
    const { target } = e;
    const clsTarget = target.getAttribute('class');

    // закрываем окно, если клик произошел по фону
    if (clsTarget === styles.modal) onClose();
  }, []);

  return ReactDOM.createPortal((
    <>
      <ModalOverlay />
      <div className={styles.modal} onClick={onClick}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <p className="text text_type_main-large">{title}</p>
            <div className={styles.close}>
              <CloseIcon type="primary" onClick={onClose} />
            </div>
          </div>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    </>
  ), el);
});

export default Modal;