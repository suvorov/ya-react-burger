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
  const bodyEl = document.body;

  const onKeyUp = React.useCallback((e) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    bodyEl.addEventListener('keydown', onKeyUp);

    return () => {
      bodyEl.removeEventListener('keydown', onKeyUp);
    };
  }, [bodyEl, onKeyUp]);

  return ReactDOM.createPortal((
    <>
      <ModalOverlay onClose={onClose} />
      <div className={styles.modal}>
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
    </>
  ), modalRootEl);
});

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;