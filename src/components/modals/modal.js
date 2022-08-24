import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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

  useEffect(() => {
    document.body.addEventListener('keydown', onKeyUp);

    return () => {
      document.body.removeEventListener('keydown', onKeyUp);
    };
  }, []);

  const onClick = React.useCallback((e) => {
    const { target } = e;
    const clsTarget = target.getAttribute('class');

    // закрываем окно, если клик произошел по фону
    if (clsTarget === styles.modal) onClose();
  }, []);

  const onKeyUp = React.useCallback((e) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onClose();
    }
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
  ), modalRootEl);
});

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;